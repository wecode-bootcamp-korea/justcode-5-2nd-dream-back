const { Router } = require('express');
const router = Router();
const { getInformation, putpurchase } = require('../controllers/purchase');

router.get('/information/:id', getInformation); //구매,판매 사이즈 별 정보
router.put('/purchase/:userId/:sellId', putpurchase); //구매 버튼
module.exports = router;
