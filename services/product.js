const getProduct = require('../models/product');

const productDetail = async id => {
  return await getProduct.getProductDetail(id);
};

const getProducts = async keyword => {
  return await getProduct.getProducts(keyword);
};

module.exports = { productDetail, getProducts };
