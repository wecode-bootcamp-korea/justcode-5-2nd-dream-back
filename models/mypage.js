const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getMypageByUserId(userid) {
  const dbMypage = await prisma.$queryRaw`

  SELECT
  u.id,
  u.email,
  u.password,
  u.phone,
  u.name,
  u.image,
  JSON_ARRAYAGG(JSON_Object("address",address.address,"id",address.id)) address
  
 FROM user as u
 JOIN address ON address.user_id = u.id

 WHERE u.id = ${userid}
 GROUP BY address.user_id
  `;
  // return res.status(200).json({ message: 'CREATED' });
  return dbMypage;
}
// 고유 주소 아이디값 쿼리

async function putMypageByuserId(userId, name) {
  const dbMypage = await prisma.$queryRaw`
  UPDATE user SET name=${name} WHERE user.id=${userId};
  `;
  return dbMypage;
}

async function putMyPageByPhone(userId, phone) {
  const dbMypage = await prisma.$queryRaw`
  UPDATE user SET phone=${phone} WHERE id=${userId};
  `;
  return dbMypage;
}

async function postMyPageAdd(address, user_id) {
  const dbMypage = await prisma.$queryRaw`
  INSERT INTO address(address,user_id) values (${address},${user_id})
  `;
  return dbMypage;
}

async function putMyPageAdd(id, address) {
  const dbMypage = await prisma.$queryRaw`
  UPDATE address SET address=${address} WHERE id=${id} ;
  `;
  return dbMypage;
}

async function deleteMyPageAdd(id) {
  const dbMypage = await prisma.$queryRaw`
  DELETE FROM address WHERE id=${id} ;
  `;
  return dbMypage;
}
// async function putMypageByuserId(userId, address) {
//   console.log(putMypageByuserId, 'address');
//   const dbMypage = await prisma.$queryRaw`
//   UPDATE user SET address=${address} WHERE id=${userId};
//   `;
//   // return res.status(200).json({ message: 'CREATED' });
//   return dbMypage;
// }

module.exports = {
  getMypageByUserId,
  putMypageByuserId,
  putMyPageByPhone,
  postMyPageAdd,
  putMyPageAdd,
  deleteMyPageAdd,
};