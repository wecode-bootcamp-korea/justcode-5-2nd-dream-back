const { displayInfo } = require('../services/mainPage');

const mainPageController = async (req, res, next) => {
  try {
    const [justDropList, popularList] = await displayInfo();
    return res.status(201).json({ data: [justDropList, popularList] });
  } catch (err) {
    next(err);
  }
};

module.exports = { mainPageController };
