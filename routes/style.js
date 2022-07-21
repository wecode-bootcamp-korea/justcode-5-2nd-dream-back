const express = require('express');
const {
  getStylesController,
  addStyleLikeController,
  deleteStyleLikeController,
} = require('../controllers/style');
const router = express.Router();

router.get('/style', getStylesController);
router.post('/style/wish', addStyleLikeController);
router.delete('/style/wish', deleteStyleLikeController);

module.exports = router;
