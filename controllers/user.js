const { join, login } = require('../services/user');

const joinController = async (req, res) => {
  try {
    const { email, password } = req.body;

    await join(email, password);

    return res.status(201).json({ message: 'SIGNUP_SUCCESS' });
  } catch (error) {
    return res.json({ message: error.message });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const token = await login(email, password);

    return res.status(201).json({ token });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

module.exports = { joinController, loginController };
