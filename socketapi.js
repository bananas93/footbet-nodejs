const io = require('socket.io')({
  cors: {
    origin: 'http://footbet.site',
    methods: ['GET', 'POST'],
  },
});

const socketapi = {
  io,
};

module.exports = socketapi;
