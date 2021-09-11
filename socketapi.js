const io = require('socket.io')({
  cors: {
    origin: 'https://footbet.herokuapp.com',
    methods: ['GET', 'POST'],
  },
});

const socketapi = {
  io,
};

module.exports = socketapi;
