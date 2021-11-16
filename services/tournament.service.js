const db = require('../models');

const findAllTournaments = async () => db.Tournament.findAll();

const findTournament = async (id) => db.Tournament.findByPk(id);

const tournamentsService = {
  findAllTournaments,
  findTournament,
};

module.exports = tournamentsService;
