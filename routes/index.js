const express = require('express');
const router = express.Router();

const mypageRouter = require('./mypage');
const wishListRouter = require('./wishlist');

router.use(mypageRouter);
router.use(wishListRouter);

module.exports = router;
