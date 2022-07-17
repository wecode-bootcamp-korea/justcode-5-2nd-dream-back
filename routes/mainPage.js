const express = require('express');
const router = express.Router();
const { mainPageController } = require('../controllers/mainPage');

router.get('/main', mainPageController);

module.exports = router;
