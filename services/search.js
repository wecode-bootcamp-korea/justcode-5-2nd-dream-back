const { getSearchDetails } = require('../models/search');
const { getWishForSell } = require('../models/wishlist');

const searchService = async (userId, keyword) => {
  if (userId) {
    const wishs = getWishForSell(userId);
    const products = getSearchDetails(keyword);
    products.map(product => {
      for (let i = 0; i < wishs.length; i++) {
        if (product.id === wish) {
        }
      }
    });
  } else {
    return await getSearchDetails(keyword);
  }
};

module.exports = { searchService };
