const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function displayMain() {
  const [justDropList, popularList] = await prisma.$transaction([
    prisma.$queryRaw`SELECT sell.product_id, brand.brand, product_images.url AS image_url, product.name AS product_name,sell.cheapest_price,sell.created_at
    FROM (SELECT product_id, MIN(sell.price) AS cheapest_price, MAX(sell.created_at) AS created_at FROM sell WHERE sell.sell_status_id = 1 GROUP BY product_id) sell 
    JOIN product ON sell.product_id = product.id JOIN brand ON product.brand_id = brand.id JOIN product_images ON product.id = product_images.product_id
    JOIN product_detail ON product.id = product_detail.product_id WHERE product_images.position = 1
    ORDER BY sell.created_at DESC`,
    prisma.$queryRaw`SELECT brand.brand, product_images.url AS image_url, product.name AS product_name, sell.product_id, sell.sell_num,
        product_detail.price FROM (SELECT product_id, MIN(sell.price) AS cheapest_price, COUNT(sell.product_id) AS sell_num FROM sell WHERE sell.sell_status_id = 2 GROUP BY product_id) sell
         JOIN product ON sell.product_id = product.id JOIN brand ON product.brand_id = brand.id JOIN product_images ON product.id = product_images.product_id
        JOIN product_detail ON product.id = product_detail.product_id WHERE product_images.position = 1
        ORDER BY sell_num DESC`,
  ]);
  return [justDropList, popularList];
}

module.exports = { displayMain };
