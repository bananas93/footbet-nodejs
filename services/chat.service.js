const db = require('../models');

const getAllMessages = async () => db.Chat.findAll({
  attributes: ['id', 'message', 'createdAt'],
  include: [
    { model: db.User, attributes: ['id', 'name'] },
  ],
});

const saveMessage = async (id, message) => {
  const result = await db.Chat.create({ userId: Number(id), message });
  return result;
};

const editMessage = async (id, userId, message) => db.Chat.update({ message }, {
  where: {
    id,
    userId,
  },
});

const deleteMessage = async (id) => db.Chat.destroy({ where: { id } });

const chatService = {
  getAllMessages,
  saveMessage,
  deleteMessage,
  editMessage,
};

module.exports = chatService;
