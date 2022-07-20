const { getSearchDetails } = require('../models/search');

const searchService = async () => {
  return await getSearchDetails();
};

module.exports = { searchService };
