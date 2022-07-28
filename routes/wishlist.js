const { validateToken } = require('../middleware/validateToken');
const express = require('express');
const {
  getWishController,
  createWishController,
  deleteWishController,
} = require('../controllers/wishlist');
const router = express.Router();

router.get('/wish', validateToken, getWishController);
router.post('/wish', validateToken, createWishController);
router.delete('/wish', validateToken, deleteWishController);

module.exports = router;
