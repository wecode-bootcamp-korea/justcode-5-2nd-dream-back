const express = require('express');
const {
  getWishController,
  createWishController,
  deleteWishController,
} = require('../controllers/wishlist');
const router = express.Router();
const { isLogin } = require('../middleware/auth');

router.get('/wish/:id', isLogin, getWishController);
router.post('/wish', createWishController);
router.delete('/wish', deleteWishController);

module.exports = router;
