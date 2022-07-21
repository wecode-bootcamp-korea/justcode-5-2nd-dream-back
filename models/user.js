const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();

async function getUserByEmail(email) {
  const [existingUser] = await prisma.$queryRaw`
    SELECT * FROM user WHERE email=${email}; 
  `;
  return existingUser;
}

async function getUserByIdSocialSignup(emall) {
  const userId = prisma.$queryRaw`
    SELECT id FROM user WHERE email=${emall}
  `;
  return userId;
}

async function getUserById(id) {
  const [existingUserById] = await prisma.$queryRaw`
    SELECT * FROM user WHERE id=${id}; 
  `;
  return existingUserById;
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

async function deleteUser(id) {
  await prisma.$queryRaw`
    DELETE FROM user WHERE id=${id};
  `;
}

module.exports = {
  getUserByEmail,
  getUserById,
  getUserByIdSocialSignup,
  createUser,
  deleteUser,
};
