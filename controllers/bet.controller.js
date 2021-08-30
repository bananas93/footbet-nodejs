const betService = require('../services/bet.service');

const addUpdateBet = async (req, res) => {
  try {
    const userId = req.userData.id;
    const {
      homeBet, awayBet, matchId, tournamentId,
    } = req.body;
    const result = await betService.createOrUpdateBet(
      userId,
      homeBet,
      awayBet,
      matchId,
      tournamentId,
    );
    if (!result) {
      return res.status(401).json({ error: 'Помилка збереження прогнозу' });
    }
    return res.status(201).json({ bet: result.dataValues, message: 'Прогноз успішно збережено' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const userBets = async (req, res) => {
  try {
    const { tournament } = req.params;
    const { id } = req.userData;
    const result = await betService.findAllUserBets(id, tournament);
    if (result === null || result.length < 1) {
      return res.status(404).json({ error: 'Прогнозів не знайдено' });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await betService.deleteById(id);
    if (!data) {
      return res.status(404).json({ message: 'Прогноз не знайдено' });
    }
    return res.status(200).json({ message: 'Прогноз успішно видалено' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const betController = {
  addUpdateBet,
  deleteById,
  userBets,
};

module.exports = betController;
