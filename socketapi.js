const io = require('socket.io')({
  cors: {
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST'],
  },
});

const socketapi = {
  io,
};

module.exports = socketapi;
