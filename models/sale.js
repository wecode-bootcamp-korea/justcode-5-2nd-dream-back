const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

function JustDroppedSelect(userId) {
  return userId
    ? `SELECT sell.product_id, 
  product.name AS product_name,
  brand.brand, 
  product_images.url AS image_url,
  sell.cheapest_price AS price,sell.created_at,
  wish.id AS wish_id`
    : `SELECT sell.product_id, 
  product.name AS product_name,
  brand.brand, 
  product_images.url AS image_url,
  sell.cheapest_price AS price,sell.created_at`;
}

function JustDroppedJoin(userId) {
  return userId
    ? ` JOIN product ON sell.product_id = product.id JOIN brand ON product.brand_id = brand.id 
    LEFT JOIN product_images ON product.id = product_images.product_id 
    LEFT JOIN (SELECT id,
        product_id 
        FROM wish 
        WHERE user_id = ${userId}
        ) wish 
        ON product.id = wish.product_id`
    : `JOIN product ON sell.product_id = product.id JOIN brand ON product.brand_id = brand.id 
    LEFT JOIN product_images ON product.id = product_images.product_id`;
}

async function postsale(price, user_id, product_detail_id, product_id) {
  return await prisma.$queryRaw`
  INSERT INTO sell(price,user_id,product_detail_id,product_id,sell_status_id) 
  values (${price},${user_id},${product_detail_id},${product_id},1) 
  `;
}
async function getJustDropped(userId) {
  return await prisma.$queryRawUnsafe(`
  ${JustDroppedSelect(userId)}
      FROM (SELECT product_id, MIN(sell.price) AS cheapest_price, MAX(sell.created_at) AS created_at 
      FROM sell WHERE sell.sell_status_id = 1 GROUP BY product_id) sell 
      ${JustDroppedJoin(userId)}
      WHERE product_images.position = 1
      ORDER BY sell.created_at DESC
      `);
}

module.exports = { postsale, getJustDropped };
