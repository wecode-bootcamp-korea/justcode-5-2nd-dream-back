const express = require('express');
const router = express.Router();

const mainRoutes = require('./mainPage');
const mypageRouter = require('./mypage');
const saleRouter = require('./sale');

router.use(mainRoutes);
router.use(mypageRouter);
router.use(saleRouter);

module.exports = router;
