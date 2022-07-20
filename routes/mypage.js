const { Router } = require('express');
const router = Router();
const {
  getmypage,
  putMyPhone,
  putmypage,
  postMyPageAddress,
  putaddress,
  deleteAddress,
  getpurchasehistory,
  getSaleHistory,
} = require('../controllers/mypage');

router.get('/mypage/:id', getmypage); //프로필 조회
router.put('/phone/:id', putMyPhone); //프로필 핸드폰 수정
router.put('/mypage/:id', putmypage); //프로필 이름 수정
router.post('/address/:id', postMyPageAddress); //프로필 주소 등록
router.put('/address/:id', putaddress); //프로필 주소 수정
router.delete('/address/:id', deleteAddress); //프로필 주소 삭제
router.get('/purchasehistory/:purchaseId', getpurchasehistory); //구매내역 조회
router.get('/salehistory/:saleId', getSaleHistory); //판매내역 조회
module.exports = router;
