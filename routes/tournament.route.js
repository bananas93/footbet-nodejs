const { Router } = require('express');
const { getTournaments, getTournament, getTournamentGroups } = require('../controllers/tournament.controller');

const router = Router();

router.get('/', getTournaments);
router.get('/:id', getTournament);
router.get('/:id/groups', getTournamentGroups);

module.exports = router;
