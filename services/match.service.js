/* eslint-disable no-param-reassign */
const getPagination = require('../helpers/getPagination');
const db = require('../models');
const calcFunctions = require('../utils/calcPoints');

const findAll = async (tournament, userId) => {
  try {
    let matches = await db.Match.findAll({
      attributes: ['id', 'stage', 'group', 'status', 'homeGoals', 'awayGoals', 'datetime', 'tournament_id'],
      where: {
        tournament_id: tournament,
      },
      include: [
        {
          model: db.Team,
          as: 'homeTeam',
          attributes: ['id', 'name'],
        },
        {
          model: db.Team,
          as: 'awayTeam',
          attributes: ['id', 'name'],
        },
        {
          model: db.Bet,
          as: 'bets',
          attributes: ['id', 'homeBet', 'awayBet'],
          include: [
            { model: db.User, as: 'user', attributes: ['id', 'name'] },
          ],
        },
      ],
    });
    if (matches === null || matches.length < 1) {
      return [];
    }
    matches = matches.map((game) => {
      game.bets.map((bet) => {
        bet.dataValues.bet = `${bet.homeBet}-${bet.awayBet}`;
        const myBet = bet.dataValues.user.id === userId;
        const points = calcFunctions.calculate(
          bet.homeBet,
          bet.awayBet,
          game.homeGoals,
          game.awayGoals,
        );
        bet.dataValues.points = points.all;
        bet.dataValues.myBet = myBet;
        return bet;
      });
      game.bets.sort((a, b) => b.dataValues.points - a.dataValues.points);
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

const findPrev = async (tournament, page, size, userId) => {
  const { limit, offset } = getPagination(page, size);
  try {
    let matches = await db.Match.findAll({
      attributes: ['id', 'stage', 'group', 'status', 'homeGoals', 'awayGoals', 'datetime', 'tournament_id'],
      where: {
        tournament_id: tournament,
        status: 'Завершено',
      },
      limit,
      offset,
      order: [
        ['datetime', 'DESC'],
      ],
      include: [
        {
          model: db.Team,
          as: 'homeTeam',
          attributes: ['id', 'name'],
        },
        {
          model: db.Team,
          as: 'awayTeam',
          attributes: ['id', 'name'],
        },
        {
          model: db.Bet,
          as: 'bets',
          attributes: ['id', 'homeBet', 'awayBet'],
          include: [
            { model: db.User, as: 'user', attributes: ['id', 'name'] },
          ],
        },
      ],
    });
    if (matches === null || matches.length < 1) {
      return [];
    }
    matches = matches.map((game) => {
      game.bets.map((bet) => {
        bet.dataValues.bet = `${bet.homeBet}-${bet.awayBet}`;
        const myBet = bet.dataValues.user.id === userId;
        const points = calcFunctions.calculate(
          bet.homeBet,
          bet.awayBet,
          game.homeGoals,
          game.awayGoals,
        );
        bet.dataValues.points = points.all;
        bet.dataValues.myBet = myBet;
        return bet;
      });
      game.bets.sort((a, b) => b.dataValues.points - a.dataValues.points);
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

const findNext = async (tournament, page, size, userId) => {
  const { limit, offset } = getPagination(page, size);
  try {
    let matches = await db.Match.findAll({
      attributes: ['id', 'stage', 'group', 'status', 'homeGoals', 'awayGoals', 'datetime', 'tournament_id'],
      where: {
        tournament_id: tournament,
        status: ['Заплановано', 'Live'],
      },
      limit,
      offset,
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
            { model: db.User, as: 'user', attributes: ['id', 'name'] },
          ],
        },
      ],
    });
    if (matches === null || matches.length < 1) {
      return [];
    }
    matches = matches.map((game) => {
      game.bets.map((bet) => {
        bet.dataValues.bet = `${bet.homeBet}-${bet.awayBet}`;
        const myBet = bet.dataValues.user.id === userId;
        const points = calcFunctions.calculate(
          bet.homeBet,
          bet.awayBet,
          game.homeGoals,
          game.awayGoals,
        );
        bet.dataValues.points = points.all;
        bet.dataValues.myBet = myBet;
        return bet;
      });
      game.bets.sort((a, b) => b.dataValues.points - a.dataValues.points);
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

const matchService = {
  findAll,
  findPrev,
  findNext,
};

module.exports = matchService;
