const salemodels = require('../models/sale');

async function postsale(
  price,
  user_id,
  product_detail_id,
  product_id,
  sell_status_id
) {
  console.log(price, user_id, 's', 's');
  return await salemodels.postsale(
    price,
    user_id,
    product_detail_id,
    product_id,
    sell_status_id
  );
}

module.exports = {
  postsale,
};
