const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { getPurchaseUserId } = require('../controllers/purchase');

async function getPurchaseUserId(id) {
  console.log(id);
  const dbPurchase = await prisma.$queryRaw`
  SELECT
  
  p.id

  FROM product as p

  WHERE product = ${id}
  `;
  console.log(dbPurchase);
  return dbPurchase;
}

module.exports = { getPurchaseUserId };
