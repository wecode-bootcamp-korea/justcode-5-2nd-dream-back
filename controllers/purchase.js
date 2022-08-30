const InformationServices = require('../services/purchase');
const purchaseServices = require('../services/purchase');

const getInformation = async (req, res) => {
  try {
    const id = req.params.id;
    const dbInformation = await InformationServices.getInformationId(id);
    return res.status(200).json({ data: dbInformation });
  } catch (err) {
    next(err);
  }
};

const putpurchase = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const sellId = req.params.sellId;
    const sell_status_id = req.body.sell_status_id;
    const dbpurchase = await purchaseServices.putpurchase(
      userId,
      sellId,
      sell_status_id
    );
    return res.status(200).json({ message: 'CREATED' });
  } catch (err) {
    next(err);
  }
};
module.exports = { getInformation, putpurchase };
