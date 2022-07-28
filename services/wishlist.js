const {
  createWish,
  deleteWish,
  getWish,
  alreadyWishItem,
} = require('../models/wishlist');

const createWishService = async (user_id, product_id) => {
  const wishDTO = { user_id, product_id };
  const wish = await alreadyWishItem(wishDTO);
  if (wish.length === 0) {
    await createWish(wishDTO);
  } else {
    const error = new Error('이미 관심상품에 등록된 상품입니다.');
    throw error;
  }
};

const deleteWishService = async (user_id, product_id) => {
  const wishDTO = { user_id, product_id };
  const deletedItem = await deleteWish(wishDTO);
  if (!deletedItem) {
    const error = new Error('이미 관심상품에서 삭제된 상품입니다.');
    throw error;
  }
};

const getWishService = async userId => {
  const wish = await getWish(userId);
  return wish;
};

module.exports = {
  createWishService,
  deleteWishService,
  getWishService,
};
