const express = require('express');
const {
  getWishController,
  createWishController,
  deleteWishController,
  getMainWishController,
} = require('../controllers/wishlist');
const router = express.Router();

router.get('/main/wish/:id', getMainWishController);
router.get('/wish/:id', getWishController);
router.post('/wish', createWishController);
router.delete('/wish', deleteWishController);

module.exports = router;
