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

 LEFT JOIN address ON address.user_id = u.id

 WHERE u.id = ${userid}

 GROUP BY u.id
  `;
  return dbMypage;
}

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

async function getpurchasehistory(purchaseId) {
  const dbMypage = await prisma.$queryRaw`
SELECT
u.id,
s.product_id,
s.user_id,
s.purchase_time,
s.price,
s.sell_status_id,
s.purchase_id,
ss.status,
p.name,
pi.url,
pd.size_id,
sz.size

from user as u

left JOIN sell as s on u.id = s.product_id

left join sell_status as ss on s.sell_status_id = ss.id

left join product as p on s.product_id = p.id

left join product_detail as pd on pd.id = p.id

left join size as sz on pd.size_id = sz.id

left join product_images as pi on p.id = pi.id

WHERE s.purchase_id = ${purchaseId}

  `;
  return dbMypage;
}

module.exports = {
  getMypageByUserId,
  putMypageByuserId,
  putMyPageByPhone,
  postMyPageAdd,
  putMyPageAdd,
  deleteMyPageAdd,
  getpurchasehistory,
};
