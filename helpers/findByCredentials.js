const bcrypt = require('bcryptjs');
const db = require('../models');

db.User.findByCredentials = async (email, password) => {
  const user = await db.User.findOne({ raw: true, where: { email } });
  if (!user) {
    throw new Error(`Користувача з email ${email} не знайдено`);
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error('Невірний пароль');
  }
  return user;
};

module.exports = db.User;
