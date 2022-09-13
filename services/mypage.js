const mypagemodels = require('../models/mypage');

async function getMypageByUserId(userId) {
  return await mypagemodels.getMypageByUserId(userId);
}

async function putMypageByuserId(userId, name) {
  return await mypagemodels.putMypageByuserId(userId, name);
}

async function putMyPageByPhone(userId, phone) {
  return await mypagemodels.putMyPageByPhone(userId, phone);
}

async function postMyPageAdd(address, userId) {
  return await mypagemodels.postMyPageAdd(address, userId);
}

async function putMyPageAdd(id, address) {
  return await mypagemodels.putMyPageAdd(id, address);
}

async function deleteMyPageAdd(id) {
  return await mypagemodels.deleteMyPageAdd(id);
}

async function getpurchasehistory(userId) {
  return await mypagemodels.getpurchasehistory(userId);
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
