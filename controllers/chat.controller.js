const chatService = require('../services/chat.service');

const getMessages = async (req, res) => {
  try {
    const result = await chatService.getAllMessages();
    if (result === null || result.length < 1) {
      return res.status(404).json({ message: 'Турнірів не знайдено' });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const seveMessage = async (req, res) => {
  try {
    const { id } = req.userData;
    const { message } = req.body;
    const result = await chatService.saveMessage(id, message);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const changeMessage = async (req, res) => {
  try {
    const userId = req.userData.id;
    const { id } = req.params;
    const { message } = req.body;
    const data = await chatService.editMessage(id, userId, message);
    if (!data) {
      return res.status(404).json({ message: 'Повідомлення не знайдено' });
    }
    return res.status(200).json({ message: 'Повідомлення змінено' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await chatService.deleteMessage(id);
    if (!data) {
      return res.status(404).json({ message: 'Повідомлення не знайдено' });
    }
    return res.status(200).json({ message: 'Повідомлення видалено' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const chatController = {
  getMessages,
  seveMessage,
  deleteById,
  changeMessage,
};

module.exports = chatController;
