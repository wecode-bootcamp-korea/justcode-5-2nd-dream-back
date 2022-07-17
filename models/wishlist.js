const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getWish() {
  const wishlist = prisma.$queryRaw`SELECT product.name,brand.brand, product_images.url AS product_image, product_detail.price, size.size
    FROM product JOIN brand ON product.brand_id = brand.id JOIN product_detail ON product.id = product_detail.product_id JOIN 
    (SELECT product_id,url FROM product_images GROUP BY id, product_id,url HAVING id = MIN(id)) product_images ON product.id = product.images.product_id`;
}

async function createWish(wishDTO) {
  console.log(wishDTO, wishDTO.product_id, wishDTO.user_id, 'WISHDTO');
  prisma.$queryRaw`INSERT INTO wish(product_id,user_id) VALUES(${wishDTO.product_id},${wishDTO.user_id})`;
}

async function deleteWish(wishDTO) {
  const deleteSql = prisma.$queryRaw`DELETE FROM wish WHERE user_id=${wishDTO.user_id} and product_id=${wishDTO.product_id}`;
  console.log('delete', deleteSql);
}

module.exports = { getWish, createWish, deleteWish };
