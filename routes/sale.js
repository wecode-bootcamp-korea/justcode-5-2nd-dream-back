const { Router } = require('express');
const asyncWrap = require('../async-wrap');
const router = Router();
const {
  wishList,
  deletwishList,
  insertwishList,
} = require('../controllers/wishlist');

router.get('/wishlist/:id', wishList);
router.delete('/wishlist/:id/:roomid', deletwishList);
router.post('/wishlist/:id', insertwishList);
module.exports = router;
