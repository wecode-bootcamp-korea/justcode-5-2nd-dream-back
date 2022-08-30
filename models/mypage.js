const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getMypageByUserId(userId) {
  return await prisma.$queryRaw`
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
  WHERE u.id = ${userId}
  GROUP BY u.id
  `;
}

async function putMypageByuserId(userId, name) {
  return await prisma.$queryRaw`
  UPDATE user SET name=${name} WHERE user.id=${userId};
  `;
}

async function putMyPageByPhone(userId, phone) {
  return await prisma.$queryRaw`
  UPDATE user SET phone=${phone} WHERE id=${userId};
  `;
}

async function postMyPageAdd(address, userId) {
  return await prisma.$queryRaw`
  INSERT INTO address(address,user_id) values (${address},${userId})
  `;
}

async function putMyPageAdd(id, address) {
  return await prisma.$queryRaw`
  UPDATE address SET address=${address} WHERE id=${id} ;
  `;
}

async function deleteMyPageAdd(id) {
  return await prisma.$queryRaw`
  DELETE FROM address WHERE id=${id} ;
  `;
}

async function getpurchasehistory(userId) {
  return await prisma.$queryRaw`
  SELECT
    u.id,
    s.product_id,
    s.user_id,
    s.created_at,
    s.price,
    s.purchase_id,
    ss.status,
    p.name,
    pi.url,
    pd.size_id,
    sz.size
  FROM user AS u
  LEFT JOIN sell as s on s.user_id = u.id
  LEFT JOIN sell_status as ss on s.sell_status_id = ss.id
  LEFT JOIN product as p on s.product_id = p.id
  LEFT JOIN product_detail as pd on pd.id = p.id
  LEFT JOIN size as sz on pd.size_id = sz.id
  LEFT JOIN product_images as pi on p.id = pi.id
  WHERE s.purchase_id = ${userId}
  `;
}

async function getSaleHistory(saleId) {
  return await prisma.$queryRaw`
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
  FROM user AS u
  LEFT JOIN sell as s on s.user_id = u.id
  LEFT JOIN sell_status as ss on s.sell_status_id = ss.id
  LEFT JOIN product as p on s.product_id = p.id
  LEFT JOIN product_detail as pd on pd.id = p.id
  LEFT JOIN size as sz on pd.size_id = sz.id
  LEFT JOIN product_images as pi on p.id = pi.id
  WHERE s.user_id = ${saleId}
  `;
}

module.exports = {
  getMypageByUserId,
  putMypageByuserId,
  putMyPageByPhone,
  postMyPageAdd,
  putMyPageAdd,
  deleteMyPageAdd,
  getpurchasehistory,
  getSaleHistory,
};
