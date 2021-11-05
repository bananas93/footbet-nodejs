const matchService = require('../services/match.service');

const getAllMatches = async (req, res) => {
  try {
    const userId = req.userData.id;
    const { tournament } = req.params;
    const matches = await matchService.findAll(tournament, userId);
    if (matches === null || matches.length < 1) {
      return res.status(404).json({ message: 'Матчів не знайдено' });
    }
    return res.status(200).json(matches);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getPrevMatches = async (req, res) => {
  try {
    const userId = req.userData.id;
    const { tournament } = req.params;
    const { page, size } = req.query;
    const matches = await matchService.findPrev(tournament, page, size, userId);
    if (matches === null || matches.length < 1) {
      return res.status(404).json({ message: 'Матчів не знайдено' });
    }
    return res.status(200).json(matches);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getNextMatches = async (req, res) => {
  try {
    const userId = req.userData.id;
    const { tournament } = req.params;
    const { page, size } = req.query;
    const matches = await matchService.findNext(tournament, page, size, userId);
    if (matches === null || matches.length < 1) {
      return res.status(404).json({ message: 'Матчів не знайдено' });
    }
    return res.status(200).json(matches);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const matchController = {
  getAllMatches,
  getPrevMatches,
  getNextMatches,
};

module.exports = matchController;
