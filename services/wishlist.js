const {
  createWish,
  deleteWish,
  getWish,
  getWishMain,
  alreadyWishItem,
} = require('../models/wishlist');

const createWishService = async (user_id, product_id, product_detail_id) => {
  const wish = await alreadyWishItem(user_id, product_id, product_detail_id);
  if (wish.length === 0) {
    const wishDTO = { user_id, product_id, product_detail_id };
    await createWish(wishDTO);
  } else {
    const error = new Error('이미 관심상품에 등록된 상품입니다.');
    throw error;
  }
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
