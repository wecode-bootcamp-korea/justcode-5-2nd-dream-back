const jwt = require('jsonwebtoken');

const validateToken = async (req, res, next) => {
  try {
    const token = req.header('Authorization');
    const user = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = user.id;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { validateToken };
