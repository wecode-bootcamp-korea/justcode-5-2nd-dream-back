const express = require('express');
const router = express.Router();

const mypageRouter = require('./mypage');

router.use(mypageRouter);
module.exports = router;
