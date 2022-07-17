const express = require('express');
const router = express.Router();

const mainRoutes = require('./mainPage');
const mypageRouter = require('./mypage');
const wishListRouter = require('./wishlist');

router.use(mainRoutes);
router.use(mypageRouter);
router.use(wishListRouter);

module.exports = router;
