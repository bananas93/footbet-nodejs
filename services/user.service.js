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

const userDetails = async (id) => {
  const user = await db.User.findByPk(id);
  return user;
};

const updateUser = async (id, email, name, password) => {
  const user = await db.User.findByPk(id);
  console.log(user);
  if (!user) {
    return false;
  }
  const result = await user.update({ email, name, password });
  return result;
};

const userService = {
  userRegister,
  userLogin,
  userDetails,
  updateUser,
};

module.exports = userService;
