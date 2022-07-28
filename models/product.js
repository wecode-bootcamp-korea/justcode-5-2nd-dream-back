const prisma = require('../models/prisma-client');

const getProductDetail = async id => {
  return await prisma.$queryRaw`
    SELECT
        p.id,
        p.name,
        p.brand,
        p.comment,
        p.size_list,
        IFNULL(
            (SELECT sell.price
            FROM sell
            where sell.product_id=${id}
            ORDER BY sell.purchase_time desc
            limit 1), 0
        ) AS latest_price,
        p.images,
        p.model_number,
        p.created_at,
        p.color,
        (select product_detail.price
            from product
            join product_detail on product_detail.product_id=product.id
            where product.id=${id}
            ORDER BY product_detail.price asc
            limit 1
        ) AS sale_price,
        wish.wish_num,
        p.category
    FROM (
        SELECT
            product.id,
            product.name,
            product.comment,
            product.model_number,
            product.color,
            product.created_at,
            b.brand,
            c.category,
            size_list.size_list,
            images.images
        FROM product
        JOIN brand b ON product.brand_id = b.id
        JOIN category c ON product.category_id = c.id
        JOIN (
            SELECT 
                product_detail.product_id, 
                JSON_ARRAYAGG(
                    JSON_OBJECT('product_size_id', ssss.id, 'product_size', ssss.size, 'product_price', product_detail.price)
                ) AS size_list
            FROM product_detail
            JOIN size ssss on ssss.id = product_detail.size_id
            group by product_detail.product_id
        ) AS size_list ON product.id = size_list.product_id
        JOIN (
            SELECT 
                ppp.id,
                JSON_ARRAYAGG(JSON_OBJECT("product_images", pi.url, "product_position", pi.position)) AS images
            FROM product AS ppp
            JOIN product_images pi ON ppp.id = pi.product_id
            GROUP BY ppp.id
        ) AS images ON product.id = images.id
        GROUP BY product.id
    ) as p
    LEFT JOIN (
        SELECT wish.product_id, COUNT(wish.product_id) AS wish_num FROM wish
        GROUP BY wish.product_id
    ) wish ON wish.product_id = p.id
    where p.id = ${id}
`;
};

const generateSortStatement = keyword => {
  return keyword
    ? `ORDER BY ${keyword} DESC LIMIT 40`
    : `ORDER BY sell_num DESC LIMIT 40`;
};

const getProducts = async keyword => {
  return await prisma.$queryRawUnsafe(`
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
};

BigInt.prototype.toJSON = function () {
  return this.toString();
};

module.exports = { getProductDetail, getProducts };
