const io = require('socket.io')({
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST'],
  },
});

const socketapi = {
  io,
};

module.exports = socketapi;
