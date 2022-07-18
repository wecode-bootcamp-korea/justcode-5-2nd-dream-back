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
  const id = req.params.id;
  const purchasehistory = await mypageServices.getpurchasehistory(id);
  return res.status(200).json({ data: purchasehistory });
};
// const insertwishList = async (req, res, next) => {
//   try {
//     const { user_id, room_id } = req.body;
//     console.log(req.body);
//     const wishList = await InsertWishList(user_id, room_id);

//     return res.status(200).json({ message: 'CREATED' });
//   } catch (err) {
//     next(err);
//   }
// };
module.exports = {
  getmypage,
  putmypage,
  putMyPhone,
  postMyPageAddress,
  putaddress,
  deleteAddress,
  getpurchasehistory,
};
