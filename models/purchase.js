const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getInformationId(id) {
  const dbInformation = await prisma.$queryRaw`
  SELECT
  
  
  ss.id,
  pd.id,
  pd.size_id,

  p.id,
  p.name,
  p.model_number,
  
  pi.id,
  pi.url,
  pi.position,
  
  JSON_ARRAYAGG(JSON_OBJECT("sell.id",s.id,"size_id",si.id,"size",si.size,"status",ss.status,"sell_status_id",s.sell_status_id,"price",s.price,"product_detail_id",s.product_detail_id)) AS size_list

  FROM sell as s

LEFT JOIN sell_status AS ss ON ss.id = s.sell_status_id
LEFT JOIN product_detail AS pd ON pd.id = s.product_detail_id
LEFT JOIN size AS si ON si.id = pd.size_id
LEFT JOIN product AS p ON p.id = pd.id
LEFT JOIN product_images AS pi ON pi.product_id =p.id

  WHERE s.id = ${id}

  GROUP BY s.id,pi.id
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
