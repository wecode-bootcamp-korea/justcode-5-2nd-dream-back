const salemodels = require('../models/sale');

async function postsale(price, user_id, product_detail_id, product_id) {
  return await salemodels.postsale(
    price,
    user_id,
    product_detail_id,
    product_id
  );
}

module.exports = {
  postsale,
};
