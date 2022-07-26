const mypageServices = require('../services/mypage');

const getmypage = async (req, res) => {
  try {
    const userid = req.params.id;
    const mypage = await mypageServices.getMypageByUserId(userid);
    return res.status(200).json({ data: mypage });
  } catch (err) {
    next(err);
  }
};

const putmypage = async (req, res) => {
  try {
    const userid = req.params.id;
    const name = req.body.name;
    const mypage = await mypageServices.putMypageByuserId(userid, name);
    return res.status(200).json({ message: 'CREATED' });
  } catch (err) {
    next(err);
  }
};

const putMyPhone = async (req, res) => {
  try {
    const userid = req.params.id;
    const phone = req.body.phone;
    const mypage = await mypageServices.putMyPageByPhone(userid, phone);
    return res.status(200).json({ message: 'CREATED' });
  } catch (err) {
    next(err);
  }
};

const postMyPageAddress = async (req, res) => {
  try {
    const userid = req.params.id;
    const address = req.body.address;
    const mypage = await mypageServices.postMyPageAdd(address, userid);
    return res.status(200).json({ message: 'CREATED' });
  } catch (err) {
    next(err);
  }
};

const putaddress = async (req, res) => {
  try {
    const id = req.params.id;
    const address = req.body.address;
    const mypage = await mypageServices.putMyPageAdd(id, address);
    return res.status(200).json({ message: 'CREATED' });
  } catch (err) {
    next(err);
  }
};

const deleteAddress = async (req, res) => {
  try {
    const id = req.params.id;
    const mypage = await mypageServices.deleteMyPageAdd(id);
    return res.status(200).json({ message: 'DELTET_CREATED' });
  } catch (err) {
    next(err);
  }
};

const getpurchasehistory = async (req, res) => {
  try {
    const user_id = req.params.user_id;
    const purchaseId = req.params.purchaseId;
    const purchasehistory = await mypageServices.getpurchasehistory(
      user_id,
      purchaseId
    );
    return res.status(200).json({ data: purchasehistory });
  } catch (err) {
    next(err);
  }
};

const getSaleHistory = async (req, res) => {
  try {
    const saleId = req.params.saleId;
    const salehistory = await mypageServices.getSaleHistory(saleId);
    return res.status(200).json({ data: salehistory });
  } catch (err) {
    next(err);
  }
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
