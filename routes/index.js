const express = require('express');
const router = express.Router();

const mainRoutes = require('./mainPage');
const mypageRouter = require('./mypage');
const wishListRouter = require('./wishlist');
const purchaseRouter = require('./purchase');
const userRouter = require('./user');

router.use(mainRoutes);
router.use(mypageRouter);
router.use(wishListRouter);
router.use(purchaseRouter);
router.use(userRouter);

module.exports = router;
