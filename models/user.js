const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();

async function getUserByEmail(email) {
  const [existingUser] = await prisma.$queryRaw`
      SELECT * FROM user WHERE email=${email}; 
  `;
  return existingUser;
}

async function createUser(createUserDto) {
  const { email, password, nickname, profileImage, id } = createUserDto;
  let idString;
  if (id) idString = id.toString();

  await prisma.$queryRaw`
    INSERT INTO
    user (email, password, name, image, social_id)
    VALUES (${email}, ${password}, ${nickname}, ${profileImage}, ${idString})
    `;
}

module.exports = { getUserByEmail, createUser };
