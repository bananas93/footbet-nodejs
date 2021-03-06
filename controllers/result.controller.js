const resultService = require('../services/result.service');
const userService = require('../services/user.service');

const getResults = async (req, res) => {
  try {
    const { tournament } = req.params;
    const result = await resultService.findAll(tournament);
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

const resultController = {
  getResults,
  getResultsByTour,
};

module.exports = resultController;
