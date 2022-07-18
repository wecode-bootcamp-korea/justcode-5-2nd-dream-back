const express = require('express');
const router = express.Router();

const mainRoutes = require('./mainPage');
const mypageRouter = require('./mypage');
const purchaseRouter = require('./purchase');
const userRouter = require('./user');

router.use(mainRoutes);
router.use(mypageRouter);
router.use(purchaseRouter);
router.use(userRouter);

module.exports = router;
