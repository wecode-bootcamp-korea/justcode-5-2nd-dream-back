const { productService } = require('../services/product');

const readProductDetails = async (req, res) => {
  try {
    const productId = req.params.id;
    const productDetails = await productService(productId);
    return res.status(201).json(productDetails);
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

module.exports = { readProductDetails };
