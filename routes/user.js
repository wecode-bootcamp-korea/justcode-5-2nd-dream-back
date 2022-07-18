const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();

router.post('/join', userController.joinController);
router.post('/login', userController.loginController);
router.get('/kakao', userController.kakao);
router.get('/auth/kakao/callback', userController.kakaoLogin);

module.exports = router;
