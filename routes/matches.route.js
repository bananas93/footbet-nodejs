/* eslint-disable no-param-reassign */
const { Router } = require('express');
const db = require('../models');

const router = Router();

router.get('/:tournament', async (req, res) => {
  const { tournament } = req.params;
  db.Match.findAll({
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
  })
    .then((matches) => {
      if (matches === null || matches.length < 1) {
        res.status(404).json({ message: 'Матчів не знайдено' });
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
        date,
        games: groups[date],
      }));
      res.status(200).json(groupArrays);
    }).catch((err) => {
      res.status(500).json(err.message);
    });
});

module.exports = router;
