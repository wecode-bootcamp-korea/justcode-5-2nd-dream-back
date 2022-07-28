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

function PopularSelect(userId) {
  return userId
    ? `SELECT product.id AS product_id,
      product.name AS product_name,
      brand.brand,
      product_images.url  AS image_url,
      cheapest_price.price,
      IFNULL(sell.sell_num, 0) AS sell_num,
      product.created_at,
    wish.id AS wish_id`
    : `SELECT product.id AS product_id,
      product.name AS product_name,
      brand.brand,
      product_images.url  AS image_url,
      cheapest_price.price,
      IFNULL(sell.sell_num, 0) AS sell_num,
      product.created_at`;
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

function PopularJoin(userId) {
  return userId
    ? ` LEFT JOIN
      (
          SELECT product_id, COUNT(sell.purchase_id) AS sell_num
          FROM sell
          GROUP BY product_id
      ) sell ON sell.product_id=product.id
      LEFT JOIN (
          SELECT product_detail.product_id, MIN(product_detail.price) AS price
          FROM product_detail
          GROUP BY product_detail.product_id) AS cheapest_price on product.id=cheapest_price.product_id
      LEFT JOIN brand ON product.brand_id = brand.id
      LEFT JOIN product_images ON product.id = product_images.product_id
      LEFT JOIN (SELECT id,
          product_id 
          FROM wish 
          WHERE user_id = ${userId}
          ) wish 
          ON product.id = wish.product_id`
    : ` LEFT JOIN
      (
          SELECT product_id, COUNT(sell.purchase_id) AS sell_num
          FROM sell
          GROUP BY product_id
      ) sell ON sell.product_id=product.id
      LEFT JOIN (
          SELECT product_detail.product_id, MIN(product_detail.price) AS price
          FROM product_detail
          GROUP BY product_detail.product_id) AS cheapest_price on product.id=cheapest_price.product_id
      LEFT JOIN brand ON product.brand_id = brand.id
      LEFT JOIN product_images ON product.id = product_images.product_id`;
}

async function displayMain(userId) {
  const [justDropList, popularList, styles] = await prisma.$transaction([
    prisma.$queryRawUnsafe(`
    ${JustDroppedSelect(userId)}
        FROM (SELECT product_id, MIN(sell.price) AS cheapest_price, MAX(sell.created_at) AS created_at 
        FROM sell WHERE sell.sell_status_id = 1 GROUP BY product_id) sell 
        ${JustDroppedJoin(userId)}
        WHERE product_images.position = 1
        ORDER BY sell.created_at DESC`),
    prisma.$queryRawUnsafe(`${PopularSelect(userId)}
        FROM product
        ${PopularJoin(userId)}
            WHERE product_images.position = 1
            ORDER BY sell_num DESC`),
    prisma.$queryRaw`
    SELECT user.email AS user_email, 
     user.image AS user_image, 
     style_image.style_id, 
     style_image.image_url
    FROM style JOIN user ON style.user_id = user.id 
    JOIN (SELECT style_id,
        url AS image_url 
        FROM style_image 
        WHERE id IN 
        (SELECT MAX(id) 
        FROM style_image 
        GROUP BY style_id)) style_image 
        ON style.id = style_image.style_id`,
  ]);
  return [justDropList, popularList, styles];
}

module.exports = { displayMain };
