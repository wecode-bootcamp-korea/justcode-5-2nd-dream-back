const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getInformationId(id) {
  const dbInformation = await prisma.$queryRaw`
  SELECT
    pd.product_id,
    JSON_ARRAYAGG(JSON_OBJECT("sell.id",s.id,"sell.user_id",s.user_id,"size_id",si.id,"size",si.size,
    "status",ss.status,"sell_status_id",s.sell_status_id,"price",s.price,"product_detail_id",s.product_detail_id)) 
    AS size_list
  FROM sell AS s
  LEFT JOIN sell_status AS ss ON ss.id = s.sell_status_id
  LEFT JOIN product_detail AS pd ON pd.id = s.product_detail_id
  LEFT JOIN size AS si ON si.id = pd.size_id
  WHERE pd.product_id = ${id}
  GROUP BY pd.product_id
  `;
  return dbInformation;
}
async function putpurchase(userId, sellId, sell_status_id) {
  const dbpurchase = await prisma.$queryRaw`
  UPDATE sell SET sell_status_id=${sell_status_id},purchase_id = ${userId} WHERE id=${sellId} ;
  `;
  return dbpurchase;
}

module.exports = { getInformationId, putpurchase };
