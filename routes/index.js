const express = require('express');
const router = express.Router();

const mainRoutes = require('./mainPage');
const mypageRouter = require('./mypage');
const purchaseRouter = require('./purchase');

router.use(mainRoutes);
router.use(mypageRouter);
router.use(purchaseRouter);

module.exports = router;
