const { Router } = require('express');
const router = Router();
const {
  getmypage,
  // postmypage,
  // putmypage,
  // deletemypage,
  // getsalemypage,
  // getpurchasemypage,
} = require('../controllers/mypage');

router.get('/mypage/:id', getmypage); //프로필 조회
// router.post('/mypage/:id/', postmypage); //프로필 등록
// router.put('/mypage/:id', putmypage); //프로필 수정
// router.delete('/mypage/:id', deletemypage); //주소만 삭제
// router.get('/salemypage/:id', getsalemypage); //구매내역 조회
// router.get('/purchasemypage/:id', getpurchasemypage); //판매내역 조회
module.exports = router;
