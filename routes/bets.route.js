const { Router } = require('express');
const betController = require('../controllers/bet.controller');

const router = Router();

router.post('/', betController.addUpdateBet);
router.get('/:tournament', betController.userBets);
router.delete('/:id', betController.deleteById);

module.exports = router;
