const { createWish, deleteWish, getWish } = require('../models/wishlist');

const createWishService = async (user_id, product_id) => {
  const wishDTO = { user_id, product_id };
  await createWish(wishDTO);
};

const deleteWishService = async (user_id, product_id) => {
  const wishDTO = { user_id, product_id };
  await deleteWish(wishDTO);
};

const getWishService = async () => {
  const wish = await getWish();
  return wish;
};

module.exports = { createWishService, deleteWishService, getWishService };
