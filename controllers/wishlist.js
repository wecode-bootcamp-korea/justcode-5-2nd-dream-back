const {
  getWishService,
  createWishService,
  deleteWishService,
} = require('../services/wishlist');

const getWishController = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const wish = await getWishService(userId);
    return res.status(201).json({ data: wish });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const createWishController = async (req, res, next) => {
  try {
    const { user_id, product_detail_id } = req.body;
    await createWishService(user_id, product_detail_id);
    return res.status(201).json({ message: 'wishlist item is added' });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const deleteWishController = async (req, res, next) => {
  try {
    const { user_id, product_detail_id } = req.body;
    await deleteWishService(user_id, product_detail_id);
    return res.status(201).json({ message: 'wishlist item is deleted' });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  getWishController,
  createWishController,
  deleteWishController,
};
