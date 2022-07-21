const { getStyles, addStyleLike, deleteStyleLike } = require('../models/style');

const getStylesService = async keyword => {
  const styles = await getStyles(keyword);
  for (let i = 0; i < styles.length; i++) {
    styles[i].like_num = parseInt(styles[i].like_num);
  }
  return styles;
};

const addStyleLikeService = async (style_id, user_id) => {
  likeDTO = { style_id, user_id };
  await addStyleLike(likeDTO);
};

const deleteStyleLikeService = async (style_id, user_id) => {
  likeDTO = { style_id, user_id };
  await deleteStyleLike(likeDTO);
};

module.exports = {
  getStylesService,
  addStyleLikeService,
  deleteStyleLikeService,
};
