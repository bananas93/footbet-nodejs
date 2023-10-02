const { findAllTournaments, findTournament, findTournamentGroups } = require('../services/tournament.service');

const getTournaments = async (req, res) => {
  try {
    const result = await findAllTournaments();
    res.set('Access-Control-Expose-Headers', 'X-Total-Count');
    res.set('X-Total-Count', result.length);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getTournament = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await findTournament(id);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getTournamentGroups = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await findTournamentGroups(id);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const tournamentController = {
  getTournaments,
  getTournament,
  getTournamentGroups,
};

module.exports = tournamentController;
