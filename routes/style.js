const express = require('express');
const {
  getStylesLikeController,
  addStyleLikeController,
  deleteStyleLikeController,
} = require('../controllers/style');
const router = express.Router();

router.get('/style', getStylesLikeController);
router.post('/style/wish', addStyleLikeController);
router.delete('/style/wish', deleteStyleLikeController);

module.exports = router;
