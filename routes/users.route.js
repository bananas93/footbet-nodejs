const { Router } = require('express');
const userController = require('../controllers/user.controller');

const router = Router();

const checkToken = require('../utils/checkToken');

router.post('/register', userController.userRegister);
router.post('/login', userController.userLogin);
router.get('/', userController.getAllUsers);
router.get('/:id/:tournament', userController.getUserDetails);
router.get('/me', checkToken, userController.userInfo);
router.post('/me', checkToken, userController.updateUserInfo);

module.exports = router;
