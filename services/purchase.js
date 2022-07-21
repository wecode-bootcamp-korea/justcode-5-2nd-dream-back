const Informationmodels = require('../models/purchase');
const purchasemodels = require('../models/purchase');

async function getInformationId(id) {
  return await Informationmodels.getInformationId(id);
}
async function putpurchase(userId, sell_status_id, sellId) {
  return await purchasemodels.putpurchase(userId, sell_status_id, sellId);
}

module.exports = {
  getInformationId,
  putpurchase,
};
