const { getProductDetails } = require('../models/product');

const productService = async id => {
  return await getProductDetails(id);
};

module.exports = { productService };
