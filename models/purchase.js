const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { postPurchaseUserId } = require('../controllers/purchase');

async function postPurchaseUserId(id) {
  const dbPurchase = await prisma.$queryRaw`
  
  `;
  return dbPurchase;
}

module.exports = { postPurchaseUserId };
