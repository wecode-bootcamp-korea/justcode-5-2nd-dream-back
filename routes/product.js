const express = require('express');
const router = express.Router();
const { readProductDetails } = require('../controllers/product');

router.get('/products/:id', readProductDetails);

module.exports = router;
