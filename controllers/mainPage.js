const { displayInfo } = require('../services/mainPage');

const mainPageController = async (req, res, next) => {
  try {
    const [justDropList, popularList, styles] = await displayInfo();
    return res.status(201).json({ data: [justDropList, popularList, styles] });
  } catch (err) {
    next(err);
  }
};

module.exports = { mainPageController };
