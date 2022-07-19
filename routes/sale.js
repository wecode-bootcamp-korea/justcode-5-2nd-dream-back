const { Router } = require('express');
const router = Router();
const { postsale } = require('../controllers/sale');

router.post('/sale', postsale);
module.exports = router;
