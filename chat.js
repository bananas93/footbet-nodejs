/* eslint-disable no-param-reassign */
const jwt = require('jsonwebtoken');
const { io } = require('./socketapi');

const chat = () => {
  io.use((socket, next) => {
    if (socket.handshake.query && socket.handshake.query.token) {
      return jwt.verify(socket.handshake.query.token, 'SECRET_KEY', (err, decoded) => {
        if (err) return next(new Error('Authentication error'));
        socket.decoded = decoded;
        next();
      });
    }
    return next(new Error('Authentication error'));
  })
    .on('connection', (socket) => {
      console.log('New user connection', socket);
      socket.on('message', (message) => {
        io.emit('message', message);
      });
    });
};

module.exports = chat;
