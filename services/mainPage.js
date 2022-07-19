const { displayMain } = require('../models/mainPage');

const displayInfo = async () => {
  const [justDropList, popularList] = await displayMain();
  for (let i = 0; i < popularList.length; i++) {
    popularList[i].sell_num = parseInt(popularList[i].sell_num);
  }
  return [justDropList, popularList];
};

module.exports = { displayInfo };
