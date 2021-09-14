const { Router } = require('express');
const chatController = require('../controllers/chat.controller');

const router = Router();

router.get('/', chatController.getMessages);
router.post('/', chatController.seveMessage);
router.patch('/:id', chatController.changeMessage);
router.delete('/:id', chatController.deleteById);

module.exports = router;
