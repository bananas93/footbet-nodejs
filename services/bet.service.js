/* eslint-disable no-param-reassign */
const moment = require('moment');
const db = require('../models');
const createOrUpdate = require('../helpers/createOrUpdate');
const calcFunctions = require('../utils/calcPoints');

const createOrUpdateBet = async (userId, homeBet, awayBet, matchId, tournamentId) => {
  const match = await db.Match.findByPk(matchId);
  const values = {
    homeBet: Number(homeBet),
    awayBet: Number(awayBet),
    userId,
    matchId: Number(matchId),
    tournamentId: Number(tournamentId),
  };
  const condition = {
    userId: Number(userId),
    matchId: Number(matchId),
  };
  if (moment().isAfter(match.dataValues.datetime)) {
    return false;
  }
  const result = await createOrUpdate(db.Bet, values, condition);
  return result;
};

const findAllUserBets = async (id, tournament) => {
  try {
    let matches = await db.Match.findAll({
      attributes: ['id', 'stage', 'group', 'status', 'homeGoals', 'awayGoals', 'datetime', 'tournament_id'],
      where: {
        tournament_id: tournament,
        status: ['Завершено', 'Live'],
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
              attributes: ['id', 'name'],
              where: { id },
            },
          ],
        },
      ],
    });
    if (matches === null || matches.length < 1) {
      return [];
    }
    matches = matches.map((game) => {
      game.bets.map((bet) => {
        const points = calcFunctions.calculate(
          bet.homeBet,
          bet.awayBet,
          game.homeGoals,
          game.awayGoals,
        );
        bet.dataValues.points = points.all;
        return bet;
      });
      return game;
    });
    const groups = matches.reduce((allGroups, game) => {
      const date = game.datetime.toISOString().split('T')[0];
      if (!allGroups[date]) {
        allGroups[date] = [];
      }
      allGroups[date].push(game);
      return allGroups;
    }, {});
    const groupArrays = Object.keys(groups).map((date, index) => ({
      id: index,
      tour: groups[date][0].stage,
      date,
      games: groups[date],
    }));
    return groupArrays;
  } catch (err) {
    return err.message;
  }
};

const getBetsByMatch = async (id) => {
  try {
    const result = await db.Bet.findAll({
      where: {
        match_id: id,
      },
      attributes: ['id', 'homeBet', 'awayBet'],
      include: [
        {
          model: db.User,
          as: 'user',
          attributes: ['id', 'name'],
        },
      ],
    });
    return result;
  } catch (error) {
    return error;
  }
};

const deleteById = async (id) => db.Bet.destroy({ where: { id } });

const betService = {
  createOrUpdateBet,
  deleteById,
  findAllUserBets,
  getBetsByMatch,
};

module.exports = betService;
