const mypageServices = require('../services/mypage');

const getmypage = async (req, res) => {
  const userid = req.params.id;
  const mypage = await mypageServices.getMypageByUserId(userid);
  return res.status(200).json({ data: mypage });
};

const putmypage = async (req, res) => {
  const userid = req.params.id;
  const name = req.body.name;
  const mypage = await mypageServices.putMypageByuserId(userid, name);
  return res.status(200).json({ message: 'CREATED' });
};

const putMyPhone = async (req, res) => {
  const userid = req.params.id;
  const phone = req.body.phone;
  const mypage = await mypageServices.putMyPageByPhone(userid, phone);
  return res.status(200).json({ message: 'CREATED' });
};

const postMyPageAddress = async (req, res) => {
  const userid = req.params.id;
  const address = req.body.address;
  const mypage = await mypageServices.postMyPageAdd(address, userid);
  return res.status(200).json({ message: 'CREATED' });
};

const putaddress = async (req, res) => {
  const id = req.params.id;
  const address = req.body.address;
  const mypage = await mypageServices.putMyPageAdd(id, address);
  return res.status(200).json({ message: 'CREATED' });
};

const deleteAddress = async (req, res) => {
  const id = req.params.id;
  const mypage = await mypageServices.deleteMyPageAdd(id);
  return res.status(200).json({ message: 'DELTET_CREATED' });
};

const getpurchasehistory = async (req, res) => {
  const purchaseId = req.params.purchaseId;
  const purchasehistory = await mypageServices.getpurchasehistory(purchaseId);
  return res.status(200).json({ data: purchasehistory });
};

const getSaleHistory = async (req, res) => {
  const saleId = req.params.saleId;
  const salehistory = await mypageServices.getpurchasehistory(saleId);
  return res.status(200).json({ data: salehistory });
};
module.exports = {
  getmypage,
  putmypage,
  putMyPhone,
  postMyPageAddress,
  putaddress,
  deleteAddress,
  getpurchasehistory,
  getSaleHistory,
};
