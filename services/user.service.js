/* eslint-disable max-len */
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

const usersDetails = async (id, tournament) => {
  const user = await userDetails(id);
  const matches = await db.Match.findAll({
    attributes: ['id', 'stage', 'homeGoals', 'awayGoals'],
    where: {
      tournament_id: tournament,
      status: ['Live', 'Завершено'],
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

  const exactScoreMatches = [];
  let exactScoreCount = 0;
  let correctResultCount = 0;
  let goalDifferenceCount = 0;
  let fivePlusGoalsCount = 0;
  let predictMatches = 0;
  const teamPoints = {};

  matches
    .filter(game => game.bets.length > 0)
    .forEach(match => {
      const { homeGoals, awayGoals } = match;
      const { homeBet, awayBet } = match.bets[0];

      const {
        score,
        result,
        difference,
        goals5,
        all,
        matches: predictMatch,
      } = calcFunctions.calculate(homeBet, awayBet, homeGoals, awayGoals);

      exactScoreCount += score;
      correctResultCount += result;
      goalDifferenceCount += difference;
      fivePlusGoalsCount += goals5;
      predictMatches += predictMatch;

      // Update team points
      if (homeGoals > awayGoals) {
        teamPoints[match.homeTeam.name] = (teamPoints[match.homeTeam.name] || 0) + all;
      } else if (homeGoals < awayGoals) {
        teamPoints[match.awayTeam.name] = (teamPoints[match.awayTeam.name] || 0) + all;
      } else {
        teamPoints[match.homeTeam.name] = (teamPoints[match.homeTeam.name] || 0) + all;
        teamPoints[match.awayTeam.name] = (teamPoints[match.awayTeam.name] || 0) + all;
      }

      if (score > 0) {
        exactScoreMatches.push(match);
      }
    });

  // Find the favorite teams
  const favoriteTeams = Object.keys(teamPoints)
    .sort((a, b) => teamPoints[b] - teamPoints[a])
    .slice(0, 10)
    .map(team => ({
      team,
      points: teamPoints[team],
    }));

  return {
    user,
    matchesCount: matches.length,
    predictMatches,
    exactScoreCount,
    correctResultCount,
    goalDifferenceCount,
    fivePlusGoalsCount,
    favoriteTeams,
    exactScoreMatches,
  };
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
