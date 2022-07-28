const { displayMain } = require('../models/mainPage');

const displayInfo = async userId => {
  const [justDropList, popularList, styles] = await displayMain(userId);
  console.log(justDropList, 888);
  for (let i = 0; i < popularList.length; i++) {
    popularList[i].sell_num = parseInt(popularList[i].sell_num);
  }
  return [justDropList, popularList, styles];
};

module.exports = { displayInfo };
