/* eslint-disable no-param-reassign */
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const AdminBroExpress = require('@admin-bro/express');
const jwt = require('jsonwebtoken');
const admin = require('./admin');
const db = require('./models');
const userService = require('./services/user.service');
const { io } = require('./socketapi');
const chatService = require('./services/chat.service');

const clients = [];
const userTyping = [];
io.use((socket, next) => {
  if (socket.handshake.query && socket.handshake.query.token) {
    jwt.verify(socket.handshake.query.token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) return next(new Error('Authentication error'));
      socket.decoded = decoded;
      const { id } = socket.decoded;
      socket.user = await userService.userDetails(id);
      return next();
    });
  } else {
    next(new Error('Authentication error'));
  }
})
  .on('connection', (socket) => {
    socket.emit('user', JSON.stringify(socket.user));
    const { id } = socket.decoded;
    const index = clients.findIndex((client) => client === id);
    if (index === -1) {
      clients.push(id);
    }
    socket.emit('online', JSON.stringify(clients));

    socket.on('chatMessage', async (msg) => {
      const { name } = socket.user.dataValues;
      chatService.saveMessage(id, msg);
      const message = {
        id: new Date().getTime(),
        message: msg,
        user: {
          name,
        },
      };
      socket.broadcast.emit('message', message);
    });

    socket.on('messageTyping', async (data) => {
      const { name, typing } = data;
      const indexUser = userTyping.findIndex((client) => client === name);
      if (typing) {
        if (indexUser === -1) {
          userTyping.push(name);
        }
        socket.broadcast.emit('typingUsers', userTyping);
      } else {
        if (indexUser !== -1) {
          userTyping.splice(indexUser, 1);
        }
        socket.broadcast.emit('typingUsers', userTyping);
      }
    });

    socket.on('disconnect', () => {
      if (index !== -1) {
        clients.splice(index, 1);
      }
      socket.emit('online', JSON.stringify(clients));
    });
  });

db.sequelize.sync();

const checkToken = require('./utils/checkToken');

const app = express();

app.use(cors());
app.options('*', cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/matches', checkToken, require('./routes/matches.route'));
app.use('/api/results', checkToken, require('./routes/results.route'));
app.use('/api/bets', checkToken, require('./routes/bets.route'));
app.use('/api/tournaments', checkToken, require('./routes/tournament.route'));
app.use('/api/users', require('./routes/users.route'));
app.use('/api/chat', checkToken, require('./routes/chat.route'));
app.use('/api/auth/google', require('./routes/auth.route'));

const router = AdminBroExpress.buildRouter(admin);
app.use(admin.options.rootPath, router);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app;
