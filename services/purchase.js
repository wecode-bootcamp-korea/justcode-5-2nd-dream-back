const Informationmodels = require('../models/purchase');
const purchasemodels = require('../models/purchase');

async function getInformationId(id) {
  return await Informationmodels.getInformationId(id);
}
async function putpurchase(id) {
  return await purchasemodels.putpurchase(id);
}

module.exports = {
  getInformationId,
  putpurchase,
};
