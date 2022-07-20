const {
  createWish,
  deleteWish,
  getWish,
  getWishMain,
} = require('../models/wishlist');

const createWishService = async (user_id, product_id, product_detail_id) => {
  const wishDTO = { user_id, product_id, product_detail_id };
  await createWish(wishDTO);
};

const deleteWishService = async (user_id, product_id, product_detail_id) => {
  const wishDTO = { user_id, product_id, product_detail_id };
  await deleteWish(wishDTO);
};

const getWishService = async userId => {
  const wish = await getWish(userId);
  return wish;
};

const getWishs = async userId => {
  const wishs = await getWishMain(userId);
  return wishs;
};

module.exports = {
  createWishService,
  deleteWishService,
  getWishService,
  getWishs,
};
