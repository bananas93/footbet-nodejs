const { Router } = require('express');
const tournamentController = require('../controllers/tournament.controller');

const router = Router();

router.get('/', tournamentController.getTournaments);

module.exports = router;
