const { Router } = require('express');
const router = Router();
const { createSell } = require('../controllers/sale');

router.post('/sale', createSell);
module.exports = router;
