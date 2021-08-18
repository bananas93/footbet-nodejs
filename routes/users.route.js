const { Router } = require('express');
const db = require('../models');

const router = Router();

router.post('/register', async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const isUser = await db.User.findOne({ where: { email } });
    if (isUser !== null) {
      res.status(409).json({
        error: `Користувач з email ${email} вже зареєстрований`,
      });
    }
    const user = await db.User.create({ name, email, password });
    const token = await db.User.generateAuthToken(user.dataValues);
    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await db.User.findByCredentials(email, password);
    if (!user) {
      res.status(401).json({ error: 'Помилка авторизації!' });
    }
    const token = await db.User.generateAuthToken(user);
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
