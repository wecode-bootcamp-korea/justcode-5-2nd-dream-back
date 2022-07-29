const sallmodels = require('../models/sale');

async function createSell(price, user_id, product_detail_id, product_id) {
  return await sallmodels.createSell(
    price,
    user_id,
    product_detail_id,
    product_id
  );
}

module.exports = {
  createSell,
};
