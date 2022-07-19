const express = require('express');
const { body } = require('express-validator');
const userController = require('../controllers/user');
const validate = require('../middleware/validator.js');
const router = express.Router();

const validateCredential = [
  body('email')
    .notEmpty()
    .withMessage('이메일을 입력해주세요.')
    .trim()
    .isEmail()
    .withMessage('이메일 주소를 정확히 입력해주세요.'),
  body('password')
    .notEmpty()
    .withMessage('비밀번호를 입력해주세요.')
    .trim()
    .matches(
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/
    )
    .withMessage('영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)'),
  validate,
];

router.post('/join', validateCredential, userController.joinController);
router.post('/login', validateCredential, userController.loginController);
router.delete('/users', userController.deleteUserController);
router.get('/kakao', userController.kakao);
router.get('/auth/kakao/callback', userController.kakaoLogin);

module.exports = router;
