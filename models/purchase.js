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
  
  JSON_ARRAYAGG(JSON_OBJECT("product_size_id",size_id,"product_price",price)) as size_list

  FROM product as p

  LEFT JOIN product_images AS pi ON pi.product_id = p.id && pi.position 
  LEFT JOIN product_detail AS pd ON pd.product_id = p.id
  WHERE p.id = ${id}

  GROUP BY p.id,
  pi.url,
  pi.position
  
  `;
  return dbInformation;
}

module.exports = { getInformationId };
