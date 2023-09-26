/* eslint-disable no-param-reassign */
const db = require('../models');
const calcFunctions = require('../utils/calcPoints');

const userRegister = async (email, name, password) => {
  const result = { alreadyRegister: false };
  const isUser = await db.User.findOne({ where: { email } });
  if (isUser !== null) {
    result.alreadyRegister = true;
    return result;
  }
  const user = await db.User.create({ name, email, password });
  const token = await db.User.generateAuthToken(user.dataValues);
  result.user = user;
  result.token = token;
  return result;
};

const userLogin = async (email, password) => {
  try {
    const user = await db.User.findByCredentials(email, password);
    if (user instanceof Error) {
      throw user;
    }
    const token = await db.User.generateAuthToken(user);
    return token;
  } catch (error) {
    return error;
  }
};

const userDetails = async id => {
  const user = await db.User.findByPk(id);
  return user;
};

const updateUser = async (id, name, password) => {
  const user = await db.User.findByPk(id);
  if (!user) {
    return false;
  }
  const result = await user.update({ name, password });
  return result;
};

const saveUpdateRegistrationToken = async (id, token) => {
  const user = await db.User.findByPk(id);
  if (!user) {
    return false;
  }
  const result = await user.update({ registrationToken: token });
  return result;
};

const getAllUsers = async () => {
  const users = await db.User.findAll({ attributes: ['id', ['name', 'user_name']] });
  const result = users.map(user => {
    const newData = user.dataValues;
    newData.rank = 1;
    newData.matches = 0;
    newData.result = 0;
    newData.difference = 0;
    newData.goals5 = 0;
    newData.score = 0;
    newData.all = 0;
    return newData;
  });
  return result;
};

const usersDetails = async (id, tournament, tour) => {
  const result = await db.Result.findAll({
    where: {
      userId: id,
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
        model: db.User,
        as: 'user',
        attributes: ['id', 'name'],
      },
    ],
  });
  let matches = await db.Match.findAll({
    attributes: ['id', 'stage', 'homeGoals', 'awayGoals'],
    where: {
      tournament_id: tournament,
      status: ['Live', 'Завершено'],
      stage: tour ? `${tour} тур` : ['1 тур', '2 тур', '3 тур', '4 тур', '5 тур', '6 тур'],
    },
    include: [
      {
        model: db.Team,
        as: 'homeTeam',
        attributes: ['name'],
      },
      {
        model: db.Team,
        as: 'awayTeam',
        attributes: ['name'],
      },
      {
        model: db.Bet,
        as: 'bets',
        attributes: ['id', 'homeBet', 'awayBet'],
        include: [
          {
            model: db.User,
            as: 'user',
            attributes: [],
            where: {
              id,
            },
          },
        ],
      },
    ],
  });
  if (matches === null || matches.length < 1) {
    return [];
  }

  matches = matches
    .filter(game => game.bets.length > 0)
    .map(game => {
      const { 0: bet } = game.bets;
      game.dataValues.bet = bet;
      delete game.dataValues.bets;
      const points = calcFunctions.calculate(bet.homeBet, bet.awayBet, game.homeGoals, game.awayGoals);
      bet.dataValues.points = points.all;
      if (points.all === 0) {
        bet.dataValues.empty = true;
      }
      if (points.all === 2) {
        bet.dataValues.score = true;
      }
      if (points.all === 3) {
        bet.dataValues.difference = true;
      }
      if (points.all === 5) {
        bet.dataValues.result = true;
      }
      if (points.all === 6) {
        bet.dataValues.goals5 = true;
      }
      return game;
    });

  return { result, matches };
};

const userService = {
  userRegister,
  userLogin,
  userDetails,
  updateUser,
  getAllUsers,
  usersDetails,
  saveUpdateRegistrationToken,
};

module.exports = userService;
