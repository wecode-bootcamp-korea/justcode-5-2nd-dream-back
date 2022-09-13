const jwt = require('jsonwebtoken');
const { getMainInfo } = require('../services/mainPage');

const mainPageController = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (token !== 'null') {
      const user = jwt.verify(token, process.env.SECRET_KEY);
      const [justDropList, popularList, styles] = await getMainInfo(user.id);
      return res
        .status(200)
        .json({ data: [justDropList, popularList, styles] });
    } else {
      userId = '';
      const [justDropList, popularList, styles] = await getMainInfo(userId);
      return res
        .status(200)
        .json({ data: [justDropList, popularList, styles] });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { mainPageController };
