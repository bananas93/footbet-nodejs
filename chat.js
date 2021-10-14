const { io } = require('./socketapi');

const chat = () => {
  io.on('connection', (socket) => {
    console.log('connected');
    let online = Object.keys(io.engine.clients);
    io.emit('online', JSON.stringify(online));

    socket.on('disconnect', () => {
      console.log('disconnect');
      online = Object.keys(io.engine.clients);
      io.emit('online', JSON.stringify(online));
    });
  });
};

module.exports = chat;
