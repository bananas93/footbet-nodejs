/* eslint-disable no-param-reassign */
const { Router } = require('express');
const matchController = require('../controllers/match.controller');

const router = Router();

router.get('/:tournament', matchController.getAllMatches);
router.get('/:tournament/prev/', matchController.getPrevMatches);
router.get('/:tournament/next/', matchController.getNextMatches);

module.exports = router;
