const express = require('express');
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const AdminBroExpress = require('@admin-bro/express');
const admin = require('./admin');
const db = require('./models');

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
