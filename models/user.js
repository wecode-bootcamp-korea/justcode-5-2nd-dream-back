const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getUserByEmail(email) {
  const [existingUser] = await prisma.$queryRaw`
      SELECT email, password FROM user WHERE email=${email}; 
  `;
  return existingUser;
}

async function createUser(createUserDto) {
  const { email, password } = createUserDto;

  await prisma.$queryRaw`
    INSERT INTO
    user (email, password)
    VALUES (${email}, ${password})
    `;
}

async function readUserByEmail(email) {
  const [user] = await prisma.$queryRaw`
    SELECT
    email,
    password
    FROM user
    WHERE email = ${email}
`;
  return user;
}

module.exports = { getUserByEmail, createUser, readUserByEmail };
