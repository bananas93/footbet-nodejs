const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const generateHash = require('../utils/generateHash');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      name: {
        type: DataTypes.STRING,
        field: 'name',
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        field: 'email',
        unique: true,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        field: 'phone',
      },
      password: {
        type: DataTypes.STRING,
        field: 'password',
      },
      googleId: {
        type: DataTypes.STRING,
        field: 'google_id',
      },
      registrationToken: {
        type: DataTypes.STRING,
        field: 'registration_token',
        allowNull: true,
      },
    },
    {
      underscored: true,
      freezeTableName: true,
      tableName: 'users',
    },
  );
  User.beforeCreate(generateHash);
  User.beforeUpdate(generateHash);

  User.findByCredentials = async (email, password) => {
    try {
      const localUser = await User.findOne({ raw: true, where: { email } });
      if (localUser) {
        if (localUser.password) {
          const isPasswordMatch = await bcrypt.compare(password, localUser.password);
          if (isPasswordMatch) {
            return localUser;
          }
          throw new Error('Невірний пароль');
        }
        throw new Error('Пароль не встановлено, увійдіть через Google');
      }
      throw new Error('Користувача не знайдено');
    } catch (error) {
      return error;
    }
  };

  User.generateAuthToken = async ({ id }) => {
    const token = jwt.sign(
      { id },
      'mC9XjvNqXP97cgKBVDDABPd2kUL2Uk6TYPQHatR0NnwM5PYBZmXTpAM2Snyi3vWWy6JP7qdTRcTtbFUXBmBeHjl3ejnyG1',
    );
    return token;
  };
  return User;
};
