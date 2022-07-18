const { createWish, deleteWish, getWish } = require('../models/wishlist');

const createWishService = async (user_id, product_detail_id) => {
  const wishDTO = { user_id, product_detail_id };
  await createWish(wishDTO);
};

const deleteWishService = async (user_id, product_detail_id) => {
  const wishDTO = { user_id, product_detail_id };
  await deleteWish(wishDTO);
};

const getWishService = async userId => {
  const wish = await getWish(userId);
  return wish;
};

module.exports = { createWishService, deleteWishService, getWishService };
