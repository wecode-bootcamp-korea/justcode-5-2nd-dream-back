const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getStylesByLike() {
  const styles =
    await prisma.$queryRaw`SELECT user_name, user_image, style.id AS style_id, style.content, style.image_list, style.comment_num, style_like.like_num,
    style_product_list.products_info AS product_list
    FROM (SELECT user.name AS user_name, user.image AS user_image, style.id, style.content, style.comment_num,
    JSON_ARRAYAGG(CASE WHEN style_image.id IS NOT NULL THEN JSON_OBJECT('image_url',style_image.url) END) AS image_list
    FROM style JOIN style_image ON style.id = style_image.style_id JOIN user ON style.user_id = user.id GROUP BY style.id) style 
    LEFT JOIN 
    (SELECT style_id, COUNT(style_id) AS like_num FROM style_like GROUP BY style_id) style_like ON style.id = style_like.style_id
    LEFT JOIN 
    (SELECT style_product_list.style_id, 
    JSON_ARRAYAGG(JSON_OBJECT('product_id',product.id, 'product_name',product.name, 'price',product_detail.price, 'image_url',product_images.url)) AS products_info
    FROM style_product_list LEFT JOIN product ON style_product_list.product_id = product.id LEFT JOIN product_images ON product.id = product_images.product_id
    LEFT JOIN (SELECT product_id, MIN(product_detail.price) AS price FROM product_detail GROUP BY product_id) product_detail ON product.id = product_detail.product_id
    WHERE product_images.position = 1 GROUP BY style_product_list.style_id) style_product_list ON style.id = style_product_list.style_id
    ORDER BY style_like.like_num DESC`;
  return styles;
}

async function addStyleLike(likeDTO) {
  await prisma.$queryRaw`INSERT INTO style_like(style_id,user_id) VALUES(${likeDTO.style_id},${likeDTO.user_id})`;
}

async function deleteStyleLike(likeDTO) {
  await prisma.$queryRaw`DELETE FROM style_like WHERE style_id = ${likeDTO.style_id} and user_id = ${likeDTO.user_id}`;
}

module.exports = { getStylesByLike, addStyleLike, deleteStyleLike };
