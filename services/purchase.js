const purchasemodels = require('../models/purchase');

async function getPurchaseUserId(id) {
  return await purchasemodels.getPurchaseUserId(id);
}

module.exports = {
  getPurchaseUserId,
};
