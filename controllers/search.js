const { searchService } = require('../services/search');

const readDefaultSearchList = async (req, res) => {
  try {
    const keyword = req.query.sort;
    const searchList = await searchService(keyword);
    return res.status(201).json(searchList);
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

module.exports = { readDefaultSearchList };
