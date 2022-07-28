const productService = require('../services/product');

const getProductDetails = async (req, res) => {
  try {
    const productId = req.params.id;
    const productDetails = await productService.productDetail(productId);
    return res.status(201).json(productDetails);
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const keyword = req.query.sort;
    const searchList = await productService.getProducts(keyword);
    return res.status(201).json(searchList);
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

module.exports = { getProductDetails, getProducts };
