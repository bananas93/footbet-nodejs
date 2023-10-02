const { Router } = require('express');
const { addUpdateBet, userBets, deleteById } = require('../controllers/bet.controller');

const router = Router();

router.post('/', addUpdateBet);
router.get('/:tournament', userBets);
router.delete('/:id', deleteById);

module.exports = router;
