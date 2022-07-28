const { getSearchDetails } = require('../models/product');

const searchService = async keyword => {
  return await getSearchDetails(keyword);
};

module.exports = { searchService };
