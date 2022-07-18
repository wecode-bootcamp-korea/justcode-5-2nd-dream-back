const { displayMain } = require('../models/mainPage');

const displayInfo = async () => {
  const [justDropList, popularList] = await displayMain();
  return [justDropList, popularList];
};

module.exports = { displayInfo };
