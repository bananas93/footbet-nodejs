const db = require('../models');
const createOrUpdate = require('../helpers/createOrUpdate');

const addUpdateBet = async (req, res) => {
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
      return res.status(401).json({ error: 'Помилка збереження прогнозу' });
    }
    return res.status(201).json({ bet: result.dataValues, message: 'Прогноз успішно збережено' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await db.Bet.destroy({ where: { id } });
    return res.status(200).json({
      message: 'Прогноз успішно видалено',
      course: data,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const betController = {
  addUpdateBet,
  deleteById,
};

module.exports = betController;
