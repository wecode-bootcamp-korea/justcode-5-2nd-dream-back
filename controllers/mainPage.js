const jwt = require('jsonwebtoken');
const { displayInfo } = require('../services/mainPage');

const mainPageController = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (token !== 'null') {
      const user = jwt.verify(token, process.env.SECRET_KEY);
      console.log(user.id, typeof user.id, 'userID');
      const [justDropList, popularList, styles] = await displayInfo(user.id);
      return res
        .status(201)
        .json({ data: [justDropList, popularList, styles] });
    } else {
      userId = '';
      const [justDropList, popularList, styles] = await displayInfo(userId);
      return res
        .status(201)
        .json({ data: [justDropList, popularList, styles] });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { mainPageController };
