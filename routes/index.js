const express = require('express');
const router = express.Router();

const mainRoutes = require('./mainPage');
const mypageRouter = require('./mypage');

router.use(mainRoutes);
router.use(mypageRouter);
module.exports = router;
