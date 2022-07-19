const { Router } = require('express');
const router = Router();
const { postsale } = require('../controllers/sale');

router.post('/sale/:id', postsale);
module.exports = router;
