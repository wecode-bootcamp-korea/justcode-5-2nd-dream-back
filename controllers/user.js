const userService = require('../services/user');

const joinController = async (req, res) => {
  try {
    const { email, password } = req.body;
    await userService.join(email, password);

    return res.status(201).json({ message: 'SIGNUP_SUCCESS' });
  } catch (error) {
    return res.json({ message: error.message });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { id, token } = await userService.login(email, password);

    return res.status(201).json({ id, token });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const deleteUserController = async (req, res) => {
  try {
    const userId = req.params.id;
    await userService.deleteUser(userId);

    return res.status(201).json({ message: 'DELETE_SUCCESS' });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const kakao = async (_, res) => {
  try {
    const baseUrl = 'https://kauth.kakao.com/oauth/authorize';
    const config = {
      client_id: process.env.CLIENT_ID,
      redirect_uri: process.env.REDIRECT_URI,
      response_type: 'code',
    };
    const params = new URLSearchParams(config).toString();
    const finalURI = `${baseUrl}?${params}`;
    res.redirect(finalURI);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const kakaoLogin = async (req, res) => {
  try {
    const code = req.query.code;
    const result = await userService.kakaoLogin(code);
    res.redirect(`http://localhost:3000?token=${result}`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  joinController,
  loginController,
  deleteUserController,
  kakao,
  kakaoLogin,
};
