const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function postsale(price, user_id, product_detail_id, product_id) {
  const dbsale = await prisma.$queryRaw`
  INSERT INTO sell(price,user_id,product_detail_id,product_id,sell_status_id) 
  values (${price},${user_id},${product_detail_id},${product_id},1) 
  `;
  return dbsale;
}
module.exports = { postsale };
