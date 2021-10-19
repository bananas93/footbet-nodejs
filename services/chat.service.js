/* eslint-disable no-param-reassign */
const db = require('../models');

const getAllMessages = async () => {
  const messages = await db.Chat.findAll({
    attributes: ['id', 'message', 'createdAt'],
    include: [
      { model: db.User, attributes: ['id', 'name'] },
    ],
    order: [
      ['createdAt', 'ASC'],
    ],
  });

  const groups = messages.reduce((allGroups, day) => {
    const date = day.createdAt.toISOString().split('T')[0];
    if (!allGroups[date]) {
      allGroups[date] = [];
    }
    allGroups[date].push(day);
    return allGroups;
  }, {});
  const groupArrays = Object.keys(groups).map((date, index) => ({
    id: index,
    date,
    days: groups[date],
  }));
  return groupArrays;
};

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
