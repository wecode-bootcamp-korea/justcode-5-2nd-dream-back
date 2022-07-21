const mypagemodels = require('../models/mypage');

async function getMypageByUserId(userid) {
  return await mypagemodels.getMypageByUserId(userid);
}

async function putMypageByuserId(userid, name) {
  return await mypagemodels.putMypageByuserId(userid, name);
}

async function putMyPageByPhone(userid, phone) {
  return await mypagemodels.putMyPageByPhone(userid, phone);
}

async function postMyPageAdd(address, userid) {
  return await mypagemodels.postMyPageAdd(address, userid);
}

async function putMyPageAdd(id, address) {
  return await mypagemodels.putMyPageAdd(id, address);
}

async function deleteMyPageAdd(id) {
  return await mypagemodels.deleteMyPageAdd(id);
}

async function getpurchasehistory(user_id, purchaseId) {
  return await mypagemodels.getpurchasehistory(user_id, purchaseId);
}

async function getSaleHistory(saleId) {
  return await mypagemodels.getSaleHistory(saleId);
}

module.exports = {
  getMypageByUserId,
  putMypageByuserId,
  putMyPageByPhone,
  postMyPageAdd,
  putMyPageAdd,
  deleteMyPageAdd,
  getpurchasehistory,
  getSaleHistory,
};
