const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { getUserByEmail, createUser } = require('../models/user');
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

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    const error = createError('EXISTING_USER', 409);
    throw error;
  }

  const createUserDTO = {
    email,
    password: bcrypt.hashSync(password, salt),
  };
  await createUser(createUserDTO);
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

  const existingUser = await getUserByEmail(email);
  if (bcrypt.compareSync(password, existingUser.password)) {
    const token = jwt.sign({ id: existingUser.id }, process.env.SECRET_KEY, {
      expiresIn: '1d',
    });

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decoded);

    return token;
  } else {
    // 로그인 실패
    const error = createError('LOGIN_FAIL', 400);
    throw error;
  }
}

module.exports = { join, login };
