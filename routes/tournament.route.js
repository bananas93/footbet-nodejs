const { Router } = require('express');
const tournamentController = require('../controllers/tournament.controller');

const router = Router();

router.get('/', tournamentController.getTournaments);
router.get('/:id', tournamentController.getTournament);

module.exports = router;
