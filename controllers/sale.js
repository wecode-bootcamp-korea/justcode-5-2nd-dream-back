const saleServices = require('../services/sale');

const postsale = async (req, res) => {
  const id = req.params.id;
  const price = req.body.price;
  const user_id = req.body.user_id;
  const product_detail_id = req.body.product_detail_id;
  const product_id = req.body.product_id;
  const sell_status_id = req.body.sell_status_id;

  const sale = await saleServices.postsale(
    id,
    price,
    user_id,
    product_detail_id,
    product_id,
    sell_status_id
  );
  return res.status(200).json({ message: 'CREATED' });
};

module.exports = { postsale };
