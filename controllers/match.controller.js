const { findAll, editOne } = require('../services/match.service');

const getAllMatches = async (req, res) => {
  try {
    const userId = req.userData.id;
    const { tournament } = req.params;
    const matches = await findAll(tournament, userId);
    res.set('Access-Control-Expose-Headers', 'X-Total-Count');
    res.set('X-Total-Count', matches.length);
    return res.status(200).json(matches);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const editOneMatch = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, homeGoals, awayGoals } = req.body;
    await editOne(id, status, homeGoals, awayGoals, req.headers.authorization);
    return res.status(201).json({ message: 'Матч успішно оновлено' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const matchController = {
  getAllMatches,
  editOneMatch,
};

module.exports = matchController;
