const InformationServices = require('../services/purchase');
const purchaseServices = require('../services/purchase');

const getInformation = async (req, res) => {
  const id = req.params.id;
  const dbInformation = await InformationServices.getInformationId(id);
  return res.status(200).json({ data: dbInformation });
};

const putpurchase = async (req, res) => {
  const id = req.params.id;
  const sell_status_id = req.body.sell_status_id;
  console.log(sell_status_id,"확인");
  const dbpurchase = await purchaseServices.putpurchase(id, sell_status_id);
  return res.status(200).json({ message: 'CREATED' });
};
module.exports = { getInformation, putpurchase };
