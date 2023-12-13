/* eslint-disable no-param-reassign */
const jwt = require('jsonwebtoken');
const sendPushNotification = require('../firebase');
const { io } = require('../config/socketapi');
const db = require('../models');
const calcFunctions = require('../utils/calcPoints');
const { getBetsByMatch } = require('./bet.service');

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
          include: [{ model: db.User, as: 'user', attributes: ['id', 'name'] }],
        },
      ],
    });
    if (matches === null || matches.length < 1) {
      return [];
    }
    matches = matches.map(game => {
      game.bets.map(bet => {
        bet.dataValues.bet = `${bet.homeBet}-${bet.awayBet}`;
        const myBet = bet.dataValues.user.id === userId;
        const points = calcFunctions.calculate(bet.homeBet, bet.awayBet, game.homeGoals, game.awayGoals);
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

const editOne = async (id, status, homeGoals, awayGoals, type, JWToken) => {
  try {
    const match = await db.Match.findByPk(id);
    if (!match) {
      return false;
    }
    const matchStatus = status ? 'Live' : 'Завершено';
    const result = await match.update({ status: matchStatus, homeGoals, awayGoals });
    const decoded = jwt.verify(JWToken, process.env.JWT_SECRET);
    calcFunctions.calcultePoints(result);
    let res = await getBetsByMatch(result.dataValues.id);
    res = res.map(bet => {
      const myBet = bet.dataValues.user.id === decoded.id;
      bet.dataValues.bet = `${bet.homeBet}-${bet.awayBet}`;
      const points = calcFunctions.calculate(
        bet.homeBet,
        bet.awayBet,
        result.dataValues.homeGoals,
        result.dataValues.awayGoals,
      );
      bet.dataValues.points = points.all;
      bet.dataValues.myBet = myBet;
      return bet;
    });

    res.sort((a, b) => b.dataValues.points - a.dataValues.points);
    result.dataValues.bets = res;
    io.emit('matchUpdate', result.dataValues);
    let message = 'Оновлення матчу';
    if (type === 'start') {
      message = 'Матч розпочато';
    }
    if (type === 'end') {
      message = 'Матч завершився';
    }
    if (type === 'goal') {
      message = `${result.dataValues.homeTeam} ${homeGoals} - ${awayGoals} ${result.dataValues.awayTeam}`;
    }
    const payload = {
      title: 'Оновлення матчу',
      body: message,
    };
    sendPushNotification(payload);
    return true;
  } catch (err) {
    return err.message;
  }
};

const matchService = {
  findAll,
  editOne,
};

module.exports = matchService;
