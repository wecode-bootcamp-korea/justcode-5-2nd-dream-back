const sellServices = require('../services/sale');

const createSell = async (req, res) => {
  try {
    const price = req.body.price;
    const user_id = req.body.user_id;
    const product_detail_id = req.body.product_detail_id;
    const product_id = req.body.product_id;
    const sell = await sellServices.createSell(
      price,
      user_id,
      product_detail_id,
      product_id
    );
    return res.status(200).json({ message: 'CREATED' });
  } catch (err) {
    next(err);
  }
};

module.exports = { createSell };
