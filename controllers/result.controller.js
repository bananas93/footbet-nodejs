const db = require('../models');

const getResults = async (req, res) => {
  try {
    const { tournament } = req.params;
    const result = await db.Result.findAll({
      where: {
        tournament_id: tournament,
      },
      attributes: [
        'id',
        'userId',
        [db.sequelize.fn('count', db.sequelize.col('Result.id')), 'matches'],
        [db.sequelize.fn('sum', db.sequelize.col('goals5')), 'goals5'],
        [db.sequelize.fn('sum', db.sequelize.col('difference')), 'difference'],
        [db.sequelize.fn('sum', db.sequelize.col('result')), 'result'],
        [db.sequelize.fn('sum', db.sequelize.col('score')), 'score'],
        [db.sequelize.fn('sum', db.sequelize.col('all')), 'all'],
      ],
      group: ['userId'],
      include: [{ model: db.User, as: 'user', attributes: ['name'] }],
    });
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
