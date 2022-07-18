const { Router } = require('express');
const router = Router();
const { getInformation } = require('../controllers/purchase');

router.get('/information/:id', getInformation); //구매
module.exports = router;
