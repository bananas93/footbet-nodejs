const { Router } = require('express');
const resultController = require('../controllers/result.controller');

const router = Router();

router.get('/:tournament', resultController.getResults);
router.get('/:tournament/matches', resultController.getResultsByMatch);
router.get('/:tournament/tour/:tour', resultController.getResultsByTour);

module.exports = router;
