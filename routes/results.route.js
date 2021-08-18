const { Router } = require('express');
const resultController = require('../controllers/result.controller');

const router = Router();

router.get('/:tournament', resultController.getResults);

module.exports = router;
