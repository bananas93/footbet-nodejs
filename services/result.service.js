const db = require('../models');

const findAll = async (tournament) => {
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
  return result;
};

const resultService = {
  findAll,
};

module.exports = resultService;
