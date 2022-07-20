const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();

function generateSortStatement(keyword) {
  return keyword
    ? `ORDER BY ${keyword} DESC LIMIT 40`
    : `ORDER BY sell_num DESC LIMIT 40`;
}

async function getSearchDetails(keyword) {
  const productDetails = await prisma.$queryRawUnsafe(`
    SELECT product.id,
        brand.brand,
        product.name AS product_name,
        product.comment,
        product_images.url  AS image_url,
        cheapest_price.price,
        IFNULL(wish.wish_num, 0) AS wish,
        IFNULL(sell.sell_num, 0) AS sell_num,
        product.created_at
    FROM product
    LEFT JOIN (
        SELECT product_id, COUNT(sell.purchase_id) AS sell_num
        FROM sell
        GROUP BY product_id
    ) sell ON sell.product_id=product.id
    JOIN (
        SELECT product_detail.product_id, MIN(product_detail.price) AS price
        FROM product_detail
        GROUP BY product_detail.product_id
    ) AS cheapest_price on product.id=cheapest_price.product_id
    JOIN brand ON product.brand_id = brand.id
    JOIN product_images ON product.id = product_images.product_id
    LEFT JOIN (
        SELECT wish.product_id, COUNT(wish.product_id) AS wish_num FROM wish
        group by wish.product_id
    ) wish ON wish.product_id = product.id
    WHERE product_images.position = 1
    ${generateSortStatement(keyword)}
`);
  return productDetails;
}

module.exports = { getSearchDetails };
