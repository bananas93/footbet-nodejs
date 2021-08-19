/* eslint-disable no-param-reassign */
const db = require('../models');

const getAllMatches = async (req, res) => {
  try {
    const { tournament } = req.params;
    const matches = await db.Match.findAll({
      attributes: ['id', 'stage', 'group', 'status', 'homeGoals', 'awayGoals', 'datetime'],
      where: {
        tournament_id: tournament,
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
          include: [{ model: db.User, as: 'user', attributes: ['name'] }],
        },
      ],
    });
    if (matches === null || matches.length < 1) {
      return res.status(404).json({ message: 'Матчів не знайдено' });
    }
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
    return res.status(200).json(groupArrays);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const matchController = {
  getAllMatches,
};

module.exports = matchController;
