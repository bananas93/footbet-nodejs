const io = require('socket.io')({
  cors: {
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST'],
  },
});

const socketapi = {
  io,
};

// Add your socket.io logic here!
const users = {};
io.on('connection', (socket) => {
  socket.on('login', (data) => {
    users[socket.id] = data.name;
    io.emit('get online users', users);
  });
  socket.on('disconnect', () => {
    delete users[socket.id];
    io.emit('get online users', users);
  });
});
// end of socket.io logic

module.exports = socketapi;
