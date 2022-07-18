const Informationmodels = require('../models/purchase');

async function getInformationId(id) {
  return await Informationmodels.getInformationId(id);
}

module.exports = {
  getInformationId,
};
