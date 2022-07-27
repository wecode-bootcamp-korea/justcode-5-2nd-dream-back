const { getProductDetail } = require('../models/product');

const productService = async id => {
  return await getProductDetail(id);
};

module.exports = { productService };
