const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getWish(userId) {
  const wishlist = prisma.$queryRaw`SELECT product.name,brand.brand, product_images.url AS product_image, product_detail.price, size.size
    FROM wish JOIN product ON wish.product_id = product.id JOIN brand ON product.brand_id = brand.id JOIN product_detail ON product.id = product_detail.product_id JOIN size ON product_detail.size_id = size.id
    JOIN (SELECT product_id,url FROM product_images WHERE position =1) product_images ON product.id = product_images.product_id
    WHERE wish.user_id = ${userId}`;
  return wishlist;
}

async function createWish(wishDTO) {
  await prisma.$queryRaw`INSERT INTO wish(product_id,user_id) VALUES(${wishDTO.product_id},${wishDTO.user_id})`;
}

async function deleteWish(wishDTO) {
  await prisma.$queryRaw`DELETE FROM wish WHERE user_id=${wishDTO.user_id} and product_id=${wishDTO.product_id}`;
}

module.exports = { getWish, createWish, deleteWish };
