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
    const result = await userService.userLogin(email, password);
    if (result.error) {
      res.status(401).json({ error: 'Неправильний email або пароль' });
    }
    res.status(200).json({ token: result.token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const userController = {
  userRegister,
  userLogin,
};

module.exports = userController;
