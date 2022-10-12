/* eslint-disable no-param-reassign */
const express = require('express');
const { crud } = require('express-crud-router');
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
app.disable('x-powered-by');
app.use(cors({
  allowedHeaders: ['sessionId', 'Content-Type'],
  exposedHeaders: ['sessionId'],
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: true,
}));
app.options('*', cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

app.use(
  crud('/admin/team', {
    getList: ({
      filter, limit, offset, order,
    }) => db.Team.findAndCountAll({
      limit, offset, order, where: filter,
    }),
    getOne: (id) => db.Team.findByPk(id),
    create: (body) => db.Team.create(body),
    update: (id, body) => db.Team.update(body, { where: { id } }),
    destroy: (id) => db.Team.destroy({ where: { id } }),
  }),
);

app.use(
  crud('/admin/tournaments', {
    getList: ({
      filter, limit, offset, order,
    }) => db.Tournament.findAndCountAll({
      limit, offset, order, where: filter,
    }),
    getOne: (id) => db.Tournament.findByPk(id),
    create: (body) => db.Tournament.create(body),
    update: (id, body) => db.Tournament.update(body, { where: { id } }),
    destroy: (id) => db.Tournament.destroy({ where: { id } }),
  }),
);

app.use(
  crud('/admin/match', {
    getList: ({
      filter, limit, offset, order,
    }) => db.Match.findAndCountAll({
      limit, offset, order, where: filter,
    }),
    getOne: (id) => db.Match.findByPk(id),
    create: (body) => db.Match.create(body),
    update: (id, body) => db.Match.update(body, { where: { id } }),
    destroy: (id) => db.Match.destroy({ where: { id } }),
  }),
);

app.use(
  crud('/admin/bets', {
    getList: ({
      filter, limit, offset, order,
    }) => db.Bet.findAndCountAll({
      limit, offset, order, where: filter,
    }),
    getOne: (id) => db.Bet.findByPk(id),
    create: (body) => db.Bet.create(body),
    update: (id, body) => db.Bet.update(body, { where: { id } }),
    destroy: (id) => db.Bet.destroy({ where: { id } }),
  }),
);

app.use(
  crud('/admin/users', {
    getList: ({
      filter, limit, offset, order,
    }) => db.User.findAndCountAll({
      limit, offset, order, where: filter,
    }),
    getOne: (id) => db.User.findByPk(id),
    create: (body) => db.User.create(body),
    update: (id, body) => db.User.update(body, { where: { id } }),
    destroy: (id) => db.User.destroy({ where: { id } }),
  }),
);

app.use('/api/matches', checkToken, require('./routes/matches.route'));
app.use('/api/results', checkToken, require('./routes/results.route'));
app.use('/api/bets', checkToken, require('./routes/bets.route'));
app.use('/api/tournaments', checkToken, require('./routes/tournament.route'));
app.use('/api/users', require('./routes/users.route'));
app.use('/api/auth/google', require('./routes/auth.route'));

app.use(express.static(path.resolve(__dirname, 'admin/build')));

app.get('/admin', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'admin/build', 'index.html'));
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app;
