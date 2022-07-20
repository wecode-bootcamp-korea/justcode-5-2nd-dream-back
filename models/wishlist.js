const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getWish(userId) {
  const wishlist = prisma.$queryRaw`SELECT wish.product_id, wish.product_detail_id, product.name,brand.brand, product_images.url AS product_image, product_detail.price, size.size
    FROM wish JOIN product_detail ON wish.product_detail_id = product_detail.id JOIN product ON product_detail.product_id = product.id 
    JOIN brand ON product.brand_id = brand.id JOIN size ON product_detail.size_id = size.id
    JOIN (SELECT product_id,url FROM product_images WHERE position =1) product_images ON product.id = product_images.product_id
    WHERE wish.user_id = ${userId}`;
  return wishlist;
}

async function getWishMain(userId) {
  const wishs =
    await prisma.$queryRaw`SELECT product_id FROM wish WHERE user_id = ${userId} GROUP BY product_id`;
  return wishs;
}

async function createWish(wishDTO) {
  await prisma.$queryRaw`INSERT INTO wish(product_id,product_detail_id,user_id) VALUES(${wishDTO.product_id},${wishDTO.product_detail_id},${wishDTO.user_id})`;
}

async function deleteWish(wishDTO) {
  const deletedItem =
    await prisma.$executeRaw`DELETE FROM wish WHERE user_id=${wishDTO.user_id} and product_id=${wishDTO.product_id} and product_detail_id=${wishDTO.product_detail_id}`;
  return deletedItem;
}

async function alreadyWishItem(wishDTO) {
  const wish =
    await prisma.$queryRaw`SELECT * FROM wish WHERE user_id=${wishDTO.user_id} and product_id=${wishDTO.product_id} and product_detail_id=${wishDTO.product_detail_id}`;
  return wish;
}

module.exports = {
  getWish,
  createWish,
  deleteWish,
  getWishMain,
  alreadyWishItem,
};
