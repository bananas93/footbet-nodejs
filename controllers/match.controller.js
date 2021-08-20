const matchService = require('../services/match.service');

const findAllMatches = async (req, res) => {
  try {
    const { tournament } = req.params;
    const matches = await matchService.findAll(tournament);
    if (matches === null || matches.length < 1) {
      return res.status(404).json({ message: 'Матчів не знайдено' });
    }
    return res.status(200).json(matches);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const matchController = {
  findAllMatches,
};

module.exports = matchController;
