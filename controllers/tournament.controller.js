const tournamentsService = require('../services/tournament.service');

const getTournaments = async (req, res) => {
  try {
    const result = await tournamentsService.findAllTournaments();
    if (result === null || result.length < 1) {
      return res.status(404).json({ message: 'Турнірів не знайдено' });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getTournament = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await tournamentsService.findTournament(id);
    if (result === null || result.length < 1) {
      return res.status(404).json({ message: 'Турніру не знайдено' });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const tournamentController = {
  getTournaments,
  getTournament,
};

module.exports = tournamentController;
