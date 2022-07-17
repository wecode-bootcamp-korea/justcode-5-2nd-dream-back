const express = require('express');
const {
  getWishController,
  createWishController,
  deleteWishController,
} = require('../controllers/wishlist');
const router = express.Router();

router.get('/wish', getWishController);
router.post('/wish', createWishController);
router.delete('/wish', deleteWishController);

module.exports = router;
