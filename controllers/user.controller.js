const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');

const userRegister = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const result = await userService.userRegister(email, name, password);
    if (result.alreadyRegister) {
      res.status(409).json({
        error: `Користувач з email ${email} вже зареєстрований`,
      });
    }
    res.status(201).json({ token: result.token, user: result.user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await userService.userLogin(email, password);
    if (token instanceof Error) {
      throw token;
    }
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

const userInfo = async (req, res) => {
  try {
    const { id } = req.userData;
    const result = await userService.userDetails(id);
    const { dataValues } = result;
    if (result.error) {
      res.status(401).json({ error: 'Неправильний email або пароль' });
    }
    res.status(200).json(dataValues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const { id, tournament, tour } = req.params;
    const result = await userService.usersDetails(id, tournament, tour);
    if (result.error) {
      res.status(401).json({ error: 'Неправильний email або пароль' });
    }
    if (result === null || result.length < 1) {
      const users = await userService.usersDetails(id, tournament);
      return res.status(200).json(users);
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const updateUserInfo = async (req, res) => {
  try {
    const { id } = req.userData;
    const { name, password } = req.body;
    const result = await userService.updateUser(id, name, password);
    if (result.error) {
      res.status(401).json({ error: 'Неправильний email або пароль' });
    }
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const getTokenFromHeader = req => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return null;
  }
  const token = authHeader.split(' ')[1];
  return token;
};
const getUserIdFromToken = token => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.id;
  } catch (error) {
    return null;
  }
};
const saveRegistrationToken = async (req, res) => {
  try {
    const JWToken = getTokenFromHeader(req);
    const userId = getUserIdFromToken(JWToken);
    const { token } = req.body;
    const result = await userService.saveUpdateRegistrationToken(userId, token);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    if (users === null || users.length < 1) {
      return res.status(404).json({ message: 'Користувачів не знайдено' });
    }
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.userDetails(id);
    if (user === null || user.length < 1) {
      return res.status(404).json({ message: 'Користувача не знайдено' });
    }
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const userController = {
  userRegister,
  userLogin,
  userInfo,
  updateUserInfo,
  saveRegistrationToken,
  getAllUsers,
  getUserDetails,
  getOneUser,
};

module.exports = userController;
