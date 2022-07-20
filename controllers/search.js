const { searchService } = require('../services/search');

const readDefaultSearchList = async (req, res) => {
  try {
    const searchList = await searchService();
    return res.status(201).json(searchList);
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

module.exports = { readDefaultSearchList };
