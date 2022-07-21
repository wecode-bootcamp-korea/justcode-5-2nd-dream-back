const express = require('express');
const router = express.Router();

const mainRoutes = require('./mainPage');
const mypageRouter = require('./mypage');
const wishListRouter = require('./wishlist');
const purchaseRouter = require('./purchase');
const userRouter = require('./user');
const styleRouter = require('./style');
const saleRouter = require('./sale');
const productRouter = require('./product');
const searchRouter = require('./search');

router.use(mainRoutes);
router.use(mypageRouter);
router.use(wishListRouter);
router.use(purchaseRouter);
router.use(userRouter);
router.use(styleRouter);
router.use(saleRouter);
router.use(productRouter);
router.use(searchRouter);

module.exports = router;
