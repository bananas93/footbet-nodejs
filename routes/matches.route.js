/* eslint-disable no-param-reassign */
const { Router } = require('express');
const { getAllMatches, editOneMatch } = require('../controllers/match.controller');

const router = Router();

router.get('/:tournament', getAllMatches);
router.patch('/:id', editOneMatch);

module.exports = router;
