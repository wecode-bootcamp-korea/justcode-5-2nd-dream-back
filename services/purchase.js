const purchasemodels = require('../models/purchase');

async function postPurchaseUserId(userid) {
  return await purchasemodels.postPurchaseUserId(userid);
}

module.exports = {
  postPurchaseUserId,
};
