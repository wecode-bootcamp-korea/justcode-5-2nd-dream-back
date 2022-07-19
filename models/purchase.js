const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getInformationId(id) {
  const dbInformation = await prisma.$queryRaw`
  SELECT
  
  p.id,
  p.name,
  p.model_number,
  pi.url,
  pi.position,
 
  JSON_ARRAYAGG(JSON_OBJECT("product_size_id",pd.size_id,"product_price",pd.price,"sell.id",s.id,"sell.sell_status_id",s.sell_status_id,"sell_status",ss.status)) as size_list

  FROM product as p

  LEFT JOIN sell AS s ON s.product_id = p.id 
  LEFT JOIN sell_status AS ss ON ss.id = s.sell_status_id
  LEFT JOIN product_images AS pi ON pi.product_id = p.id && pi.position 
  LEFT JOIN product_detail AS pd ON pd.product_id = p.id
  
  WHERE p.id = ${id}

  GROUP BY p.id,
  pi.url,
  pi.position
  
  `;
  return dbInformation;
}
async function putpurchase(id, sell_status_id) {
  console.log(sell_status_id, id, 'cd');
  const dbpurchase = await prisma.$queryRaw`
  UPDATE sell SET sell_status_id=${sell_status_id} WHERE id=${id} ;
  `;
  return dbpurchase;
}

module.exports = { getInformationId, putpurchase };
