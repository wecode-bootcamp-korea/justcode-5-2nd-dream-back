const {
  getStylesService,
  addStyleLikeService,
  deleteStyleLikeService,
} = require('../services/style');

const getStylesController = async (req, res, next) => {
  try {
    const keyword = req.query.sort;
    console.log('keyword', keyword);
    const styles = await getStylesService(keyword);
    console.log('styles', styles);
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
  getStylesController,
  addStyleLikeController,
  deleteStyleLikeController,
};
