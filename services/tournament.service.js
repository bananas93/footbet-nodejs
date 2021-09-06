const db = require('../models');

const findAllTournaments = async () => db.Tournament.findAll();

const tournamentsService = {
  findAllTournaments,
};

module.exports = tournamentsService;
