/* eslint-disable no-param-reassign */
const express = require('express');
const forest = require('forest-express-sequelize');
const Sequelize = require('sequelize');
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const jwt = require('jsonwebtoken');
const db = require('./models');
const userService = require('./services/user.service');
const { io } = require('./config/socketapi');

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
  });

db.sequelize.sync();

const checkToken = require('./utils/checkToken');

const app = express();

app.use(cors({
  origin: ['http://localhost:8080', 'https://app.forestadmin.com'],
  credentials: true,
  preflightContinue: true,
}));
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
app.use('/api/auth/google', require('./routes/auth.route'));

forest.init({
  envSecret: process.env.FOREST_SECRET,
  authSecret: process.env.FOREST_AUTH,
  objectMapping: Sequelize,
  connections: { default: db.sequelize },
}).then((FAMiddleware) => {
  app.use(FAMiddleware);
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app;
