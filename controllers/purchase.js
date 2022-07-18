const InformationServices = require('../services/purchase');

const getInformation = async (req, res) => {
  const id = req.params.id;
  const dbInformation = await InformationServices.getInformationId(id);
  return res.status(200).json({ data: dbInformation });
};
module.exports = { getInformation };
