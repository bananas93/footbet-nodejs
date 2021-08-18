/* eslint-disable no-param-reassign */
const bcrypt = require('bcryptjs');

const generateHash = (user) => {
  if (user === null) {
    throw new Error('No found employee');
  }

  if (!user.changed('password')) return user.password;
  const salt = bcrypt.genSaltSync();
  user.password = bcrypt.hashSync(user.password, salt);
  return user.password;
};

module.exports = generateHash;
