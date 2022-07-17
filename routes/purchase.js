const { Router } = require('express');
const router = Router();
const { postPurchase } = require('../controllers/purchase');

router.get('/purchase/:id', postPurchase); //구매
module.exports = router;
