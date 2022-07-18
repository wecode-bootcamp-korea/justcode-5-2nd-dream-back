const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const userRepository = require('../models/user');
const { createError } = require('../module/createError');

const salt = bcrypt.genSaltSync();

function checkPasswordPattern(str) {
  let pattern1 = /[0-9]/; // 숫자
  let pattern2 = /[a-zA-Z]/; // 문자
  let pattern3 = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자

  if (
    !pattern1.test(str) ||
    !pattern2.test(str) ||
    !pattern3.test(str) ||
    !(str.length > 7 && str.length < 17)
  ) {
    return false;
  } else {
    return true;
  }
}

async function join(email, password) {
  if (!email.includes('@') || !email.includes('.')) {
    const error = createError('JOIN_ERROR', 400);
    throw error;
  }

  if (!checkPasswordPattern(password)) {
    const error = createError('JOIN_ERROR', 400);
    throw error;
  }

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
  if (!email.includes('@') || !email.includes('.')) {
    const error = createError('LOGIN_ERROR', 400);
    throw error;
  }

  if (!checkPasswordPattern(password)) {
    const error = createError('LOGIN_ERROR', 400);
    throw error;
  }

  const existingUser = await userRepository.getUserByEmail(email);
  if (bcrypt.compareSync(password, existingUser.password)) {
    const token = jwt.sign({ id: existingUser.id }, process.env.SECRET_KEY, {
      expiresIn: '1d',
    });

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    return token;
  } else {
    // 로그인 실패
    const error = createError('LOGIN_FAIL', 400);
    throw error;
  }
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
    const token = jwt.sign({ id: existingUser.id }, process.env.SECRET_KEY);
    return token;
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

module.exports = { join, login, kakaoLogin };
