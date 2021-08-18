/* eslint-disable no-param-reassign */
const { Router } = require('express');
const matchController = require('../controllers/match.controller');

const router = Router();

router.get('/:tournament', matchController.getAllMatches);

module.exports = router;
