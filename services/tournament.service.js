/* eslint-disable no-param-reassign */
const { Op } = require('sequelize');
const League = require('../helpers/groups');
const db = require('../models');

const findAllTournaments = async () => db.Tournament.findAll();
const findTournament = async (id) => db.Tournament.findByPk(id);
const findTournamentGroups = async (id) => {
  const matches = await db.Match.findAll({
    attributes: ['id', 'stage', 'group', 'status', 'homeGoals', 'awayGoals'],
    where: {
      tournament_id: id,
      [Op.or]: [{ stage: '1 тур' }, { stage: '2 тур' }, { stage: '3 тур' }, { stage: '4 тур' }, { stage: '5 тур' }, { stage: '6 тур' }],
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
    ],
  });
  const league = new League(matches);
  const standings = league.getStandings();

  return standings;
};

const tournamentsService = {
  findAllTournaments,
  findTournament,
  findTournamentGroups,
};

module.exports = tournamentsService;
