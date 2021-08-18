const { Router } = require('express');
const createOrUpdate = require('../helpers/createOrUpdate');
const db = require('../models');

const router = Router();

router.post('/', async (req, res) => {
  try {
    const userId = req.userData.id;
    const { homeBet, awayBet, matchId } = req.body;
    const values = {
      homeBet: Number(homeBet),
      awayBet: Number(awayBet),
      userId,
      matchId: Number(matchId),
    };
    const condition = {
      userId: Number(userId),
      matchId: Number(matchId),
    };
    const result = await createOrUpdate(db.Bet, values, condition);
    if (!result) {
      res.status(401).json({ error: 'Помилка збереження прогнозу' });
    }
    res.status(201).json({ message: 'Прогноз успішно збережено' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
