/* eslint-disable no-param-reassign */
const db = require('../models');

const findAll = async (tournament) => {
  const result = await db.Result.findAll({
    where: {
      tournament_id: tournament,
    },
    attributes: [
      'id',
      'userId',
      [db.sequelize.fn('count', '*'), 'matches'],
      [db.sequelize.fn('sum', db.sequelize.col('result.goals5')), 'goals5'],
      [db.sequelize.fn('sum', db.sequelize.col('result.difference')), 'difference'],
      [db.sequelize.fn('sum', db.sequelize.col('result.result')), 'result'],
      [db.sequelize.fn('sum', db.sequelize.col('result.score')), 'score'],
      [db.sequelize.fn('sum', db.sequelize.col('result.all')), 'all'],
    ],
    order: [
      [db.sequelize.fn('SUM', db.sequelize.col('result.all')), 'DESC'],
      [db.sequelize.fn('SUM', db.sequelize.col('result.score')), 'DESC'],
      [db.sequelize.fn('SUM', db.sequelize.col('result.result')), 'DESC'],
      [db.sequelize.fn('SUM', db.sequelize.col('result.difference')), 'DESC'],
      [db.sequelize.fn('SUM', db.sequelize.col('result.goals5')), 'DESC'],
      [db.sequelize.fn('count', '*'), 'ASC'],
    ],
    include: [
      {
        model: db.User, as: 'user', attributes: ['id', 'name'],
      },
    ],
    group: ['userId'],
  });
  const resultRank = result.map((item, index) => {
    item.dataValues.rank = index + 1;
    item.dataValues.user_id = item.dataValues.user.id;
    item.dataValues.user_name = item.dataValues.user.name;
    delete item.dataValues.user;
    return item;
  });
  return resultRank;
};

const findByTour = async (tournament, tour) => {
  let stage = `${tour} тур`;
  if (Number(tour) === 7) {
    stage = '1/8 фіналу';
  }
  if (Number(tour) === '8 тур') {
    stage = '1/4 фіналу';
  }
  if (Number(tour) === '9 тур') {
    stage = '1/2 фіналу';
  }
  if (Number(tour) === '10 тур') {
    stage = 'Фінал';
  }

  const result = await db.Result.findAll({
    where: {
      tournament_id: tournament,
      stage,
    },
    attributes: [
      'id',
      'userId',
      [db.sequelize.fn('count', '*'), 'matches'],
      [db.sequelize.fn('sum', db.sequelize.col('result.goals5')), 'goals5'],
      [db.sequelize.fn('sum', db.sequelize.col('result.difference')), 'difference'],
      [db.sequelize.fn('sum', db.sequelize.col('result.result')), 'result'],
      [db.sequelize.fn('sum', db.sequelize.col('result.score')), 'score'],
      [db.sequelize.fn('sum', db.sequelize.col('result.all')), 'all'],
    ],
    order: [
      [db.sequelize.fn('SUM', db.sequelize.col('result.all')), 'DESC'],
      [db.sequelize.fn('SUM', db.sequelize.col('result.score')), 'DESC'],
      [db.sequelize.fn('SUM', db.sequelize.col('result.result')), 'DESC'],
      [db.sequelize.fn('SUM', db.sequelize.col('result.difference')), 'DESC'],
      [db.sequelize.fn('SUM', db.sequelize.col('result.goals5')), 'DESC'],
      [db.sequelize.fn('count', '*'), 'ASC'],
    ],
    include: [
      {
        model: db.User, as: 'user', attributes: ['id', 'name'],
      },
    ],
    group: ['userId'],
  });
  const resultRank = result.map((item, index) => {
    item.dataValues.rank = index + 1;
    item.dataValues.user_id = item.dataValues.user.id;
    item.dataValues.user_name = item.dataValues.user.name;
    delete item.dataValues.user;
    return item;
  });
  return resultRank;
};

const resultService = {
  findAll,
  findByTour,
};

module.exports = resultService;
