const { Router } = require('express');
const router = Router();
const { getPurchase } = require('../controllers/purchase');

router.get('/purchase/:id', getPurchase); //구매
module.exports = router;
