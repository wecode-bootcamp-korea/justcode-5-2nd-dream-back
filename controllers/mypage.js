const {
  getMypageByUserId,
  putMypageByuserId,
  putMyPageByPhone,
  postMyPageAdd,
  putMyPageAdd,
  deleteMyPageAdd,
} = require('../models/mypage');

const getmypage = async (req, res) => {
  const userid = req.params.id;
  const mypage = await getMypageByUserId(userid);
  return res.status(200).json({ data: mypage });
};

const putmypage = async (req, res) => {
  const userid = req.params.id;
  const name = req.body.name;
  const mypage = await putMypageByuserId(userid, name);
  return res.status(200).json({ message: 'CREATED' });
};

const putMyPhone = async (req, res) => {
  // console.log(req.params);
  const userid = req.params.id;
  const phone = req.body.phone;
  const mypage = await putMyPageByPhone(userid, phone);
  return res.status(200).json({ message: 'CREATED' });
};

const postMyPageAddress = async (req, res) => {
  // console.log(req.params);
  const userid = req.params.id;
  const address = req.body.address;
  const mypage = await postMyPageAdd(address, userid);
  return res.status(200).json({ message: 'CREATED' });
};

const putaddress = async (req, res) => {
  console.log(req.params, '확인');
  const id = req.params.id;
  const address = req.body.address;
  const mypage = await putMyPageAdd(id, address);
  return res.status(200).json({ message: 'CREATED' });
};

const deleteAddress = async (req, res) => {
  console.log(req.params, '확인');
  const id = req.params.id;

  const mypage = await deleteMyPageAdd(id);
  return res.status(200).json({ message: 'DELTET_CREATED' });
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
};
