const { getSearchDetails } = require('../models/search');

const searchService = async keyword => {
  return await getSearchDetails(keyword);
};

module.exports = { searchService };
