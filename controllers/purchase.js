const InformationServices = require('../services/purchase');
const purchaseServices = require('../services/purchase');

const getInformation = async (req, res) => {
  const id = req.params.id;
  const dbInformation = await InformationServices.getInformationId(id);
  return res.status(200).json({ data: dbInformation });
};

const putpurchase = async (req, res) => {
  const id = req.params.id;
  const dbpurchase = await purchaseServices.putpurchase(id);
  return res.status(200).json({ data: dbpurchase });
};
module.exports = { getInformation, putpurchase };
