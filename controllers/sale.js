const {
  getWishListByUserId,
  DeletWishList,
  InsertWishList,
} = require('../models/sale');

const wishList = async (req, res) => {
  console.log(`in controllers`);
  const userid = req.params.id;
  const wishList = await getWishListByUserId(userid);
  console.log(`before return ${wishList}`);

  return res.status(200).json({ data: wishList });
};

const deletwishList = async (req, res) => {
  console.log(req.params);
  const { id, roomid } = req.params;
  // const id = req.params.id
  // const roomid = req.params.roomid

  const wishList = await DeletWishList(id, roomid);

  return res.status(200).json({ message: 'DELET SES' });
};

const insertwishList = async (req, res, next) => {
  try {
    const { user_id, room_id } = req.body;
    console.log(req.body);
    const wishList = await InsertWishList(user_id, room_id);

    return res.status(200).json({ message: 'CREATED' });
  } catch (err) {
    next(err);
  }
};
module.exports = { wishList, deletwishList, insertwishList };
