const { Router } = require('express');
const betController = require('../controllers/bet.controller');

const router = Router();

router.post('/', betController.addUpdateBet);
router.delete('/:tournament', betController.deleteById);

module.exports = router;
