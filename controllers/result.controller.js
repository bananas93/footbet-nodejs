const resultService = require('../services/result.service');

const getResults = async (req, res) => {
  try {
    const { tournament } = req.params;
    const result = await resultService.findAll(tournament);
    if (result === null || result.length < 1) {
      return res.status(404).json({ message: 'Результатів немає' });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const resultController = {
  getResults,
};

module.exports = resultController;
