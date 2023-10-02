const resultService = require('../services/result.service');
const userService = require('../services/user.service');

const getResults = async (req, res) => {
  try {
    const { tournament } = req.params;
    const result = await resultService.findAll(tournament);
    res.set('Access-Control-Expose-Headers', 'X-Total-Count');
    res.set('X-Total-Count', result.length);
    if (result === null || result.length < 1) {
      const users = await userService.getAllUsers();
      return res.status(200).json(users);
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getResultsByTour = async (req, res) => {
  try {
    const { tournament, tour } = req.params;
    const result = await resultService.findByTour(tournament, tour);
    if (result === null || result.length < 1) {
      const users = await resultService.findAll(tournament);
      return res.status(200).json(users);
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getResultsByMatch = async (req, res) => {
  try {
    const { tournament } = req.params;
    const result = await resultService.findByMatch(tournament);
    if (result === null || result.length < 1) {
      return res.status(200).json([]);
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const resultController = {
  getResults,
  getResultsByTour,
  getResultsByMatch,
};

module.exports = resultController;
