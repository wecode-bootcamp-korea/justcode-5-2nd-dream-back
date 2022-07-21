const {
  getStylesLikeService,
  addStyleLikeService,
  deleteStyleLikeService,
} = require('../services/style');

const getStylesLikeController = async (req, res, next) => {
  try {
    const styles = await getStylesLikeService();
    return res.status(201).json({ data: styles });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const addStyleLikeController = async (req, res, next) => {
  try {
    const { style_id, user_id } = req.body;
    await addStyleLikeService(style_id, user_id);
    return res.status(201).json({ message: 'style_like item is added' });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const deleteStyleLikeController = async (req, res, next) => {
  try {
    const { style_id, user_id } = req.body;
    await deleteStyleLikeService(style_id, user_id);
    return res.status(201).json({ message: 'style_like item is deleted' });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  getStylesLikeController,
  addStyleLikeController,
  deleteStyleLikeController,
};
