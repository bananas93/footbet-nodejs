const db = require('../models');

const userRegister = async (email, name, password) => {
  const result = { alreadyRegister: false };
  const isUser = await db.User.findOne({ where: { email } });
  if (isUser !== null) {
    result.alreadyRegister = true;
    return result;
  }
  const user = await db.User.create({ name, email, password });
  const token = await db.User.generateAuthToken(user.dataValues);
  result.user = user;
  result.token = token;
  return result;
};

const userLogin = async (email, password) => {
  const result = { error: false };
  const user = await db.User.findByCredentials(email, password);
  if (!user) {
    result.error = true;
    return result;
  }
  const token = await db.User.generateAuthToken(user);
  result.token = token;
  return result;
};

const userService = {
  userRegister,
  userLogin,
};

module.exports = userService;
