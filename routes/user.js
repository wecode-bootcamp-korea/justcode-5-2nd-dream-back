const express = require('express');
const { joinController, loginController } = require('../controllers/user');

const router = express.Router();

router.post('/join', joinController);
router.post('/login', loginController);

module.exports = router;
