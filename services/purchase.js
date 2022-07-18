const Informationmodels = require('../models/purchase');
const purchasemodels = require('../models/purchase');

async function getInformationId(id) {
  return await Informationmodels.getInformationId(id);
}
async function putpurchase(sell_status_id, id) {
  return await purchasemodels.putpurchase(sell_status_id, id);
}

module.exports = {
  getInformationId,
  putpurchase,
};
