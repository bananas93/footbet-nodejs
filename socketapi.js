const io = require('socket.io')({
  cors: {
    origin: 'https://footbet.site',
    methods: ['GET', 'POST'],
  },
});

const socketapi = {
  io,
};

module.exports = socketapi;
