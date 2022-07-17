const purchaseServices = require('../services/purchase');

const postPurchase = async (req, res) => {
  const userid = req.params.id;
  const mypage = await purchaseServices.postPurchaseUserId(userid);
  return res.status(200).json({ data: mypage });
};
module.exports = { postPurchase };
