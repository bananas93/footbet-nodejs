/* eslint-disable no-param-reassign */
const jwt = require('jsonwebtoken');
const io = require('socket.io')({
  cors: {
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST'],
  },
});
const chatService = require('./services/chat.service');
const userService = require('./services/user.service');

const getAllMessages = async (socket) => {
  const messages = await chatService.getAllMessages();
  socket.emit('messages', JSON.stringify(messages));
};

const saveNewMessage = async (id, message) => {
  const result = await chatService.saveMessage(id, message);
  return result;
};

io.use((socket, next) => {
  if (socket.handshake.auth.token) {
    jwt.verify(socket.handshake.auth.token, 'mC9XjvNqXP97cgKBVDDABPd2kUL2Uk6TYPQHatR0NnwM5PYBZmXTpAM2Snyi3vWWy6JP7qdTRcTtbFUXBmBeHjl3ejnyG1', (err, decoded) => {
      if (err) return next(new Error('Authentication error'));
      socket.decoded = decoded;
      return next();
    });
  }
  return next(new Error('Authentication error'));
});

const users = [];

const addUser = (id, name) => {
  const user = {
    id, name,
  };
  users.push(user);
  return { id, name: user.name };
};

const getUser = async (id) => {
  const user = await userService.userDetails(id);
  return user;
};

io.on('connection', async (socket) => {
  const { id } = socket.decoded;
  const user = await getUser(id);
  getAllMessages(socket);
  socket.on('chat', async (data) => {
    const { message } = data;
    data.user = user;
    data.date = new Date();
    await saveNewMessage(id, message);
    io.emit('chat', data);
  });

  io.emit('USER_JOIN_CHAT_EVENT', JSON.stringify(user));

  socket.on('START_TYPING_MESSAGE_EVENT', (data) => {
    io.emit('START_TYPING_MESSAGE_EVENT', data);
  });
  socket.on('START_TYPING_MESSAGE_EVENT', (data) => {
    io.emit('START_TYPING_MESSAGE_EVENT', data);
  });
  socket.on('STOP_TYPING_MESSAGE_EVENT', (data) => {
    io.emit('STOP_TYPING_MESSAGE_EVENT', data);
  });
});

const socketapi = {
  io,
};

module.exports = socketapi;
