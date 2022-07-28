const express = require('express');
const router = express.Router();
const product = require('../controllers/product');

router.get('/:id', product.getProductDetails);
router.get('/', product.getProducts);

module.exports = router;
