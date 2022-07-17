const { displayInfo } = require('../services/maPage');

const mainPageController = async (req, res, next) => {
  try {
    const [justDropList, popularList] = await displayInfo();
    for (let i = 0; i < popularList.length; i++) {
      popularList[i].sell_num = parseInt(popularList[i].sell_num);
    }
    return res.status(201).json({ data: [justDropList, popularList] });
  } catch (err) {
    next(err);
  }
};

module.exports = { mainPageController };
