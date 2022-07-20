const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const userRepository = require('../models/user');
const { createError } = require('../module/createError');

const salt = bcrypt.genSaltSync();

async function join(email, password) {
  const existingUser = await userRepository.getUserByEmail(email);
  if (existingUser) {
    const error = createError('EXISTING_USER', 409);
    throw error;
  }

  const createUserDTO = {
    email,
    password: await bcrypt.hash(password, salt),
  };
  await userRepository.createUser(createUserDTO);
}

async function login(email, password) {
  const existingUser = await userRepository.getUserByEmail(email);
  const userId = existingUser.id;
  if (bcrypt.compareSync(password, existingUser.password)) {
    const token = jwt.sign({ id: existingUser.id }, process.env.SECRET_KEY, {
      expiresIn: '1d',
    });
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userDto = {
      id: userId,
      token,
    };
    return userDto;
  } else {
    const error = createError('LOGIN_FAIL', 400);
    throw error;
  }
}

async function deleteUser(id) {
  const existingUser = await userRepository.getUserById(id);
  if (existingUser === undefined) {
    const error = createError('NO_USER', 409);
    throw error;
  }
  await userRepository.deleteUser(id);
}

const kakaoLogin = async code => {
  const userInfo = await getKakaoToken(code);
  const email = userInfo.data.kakao_account.email;
  const nickname = userInfo.data.properties.nickname;
  const profileImage = userInfo.data.kakao_account.profile.profile_image_url;
  const id = userInfo.data.id;
  const existingUser = await userRepository.getUserByEmail(email);

  const createUserDTO = {
    email,
    nickname,
    profileImage,
    id,
  };

  if (existingUser) {
    const userId = existingUser.id;
    const token = jwt.sign({ id: existingUser.id }, process.env.SECRET_KEY);
    const userDto = {
      id: userId,
      token,
      email,
      nickname,
      profileImage,
    };
    return userDto;
  }

  if (!existingUser) {
    return await kakaoSignUp(createUserDTO);
  }
};

async function kakaoSignUp(createUserDto) {
  await userRepository.createUser(createUserDto);
  const token = jwt.sign({ id: createUserDto.id }, process.env.SECRET_KEY);
  return token;
}

const getKakaoToken = async code => {
  const tokenUrl = `https://kauth.kakao.com/oauth/token`;
  let accessToken;
  try {
    const result = await axios({
      method: 'POST',
      url: tokenUrl,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      params: {
        code,
        grant_type: 'authorization_code',
        client_id: process.env.CLIENT_ID,
        redirect_uri: process.env.REDIRECT_URI,
      },
    });
    accessToken = result.data.access_token;
  } catch (error) {
    throw error;
  }
  const userInfo = await getUserInfoByToken(accessToken);
  return userInfo;
};

const getUserInfoByToken = async accessToken => {
  let userInfo = await axios({
    method: 'GET',
    url: 'https://kapi.kakao.com/v2/user/me',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return userInfo;
};

module.exports = { join, login, deleteUser, kakaoLogin };
