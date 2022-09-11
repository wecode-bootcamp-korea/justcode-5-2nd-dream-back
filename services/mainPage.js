const { getJustDropped } = require('../models/sale');
const { getProducts } = require('../models/product');
const { getStyleInfo } = require('../models/style');

const getMainInfo = async userId => {
  const justDropList = await getJustDropped(userId);
  const popularList = await getProducts();
  const styles = await getStyleInfo();
  // for (let i = 0; i < popularList.length; i++) {
  //   popularList[i].sell_num = parseInt(popularList[i].sell_num);
  // }
  return [justDropList, popularList, styles];
};

module.exports = { getMainInfo };
