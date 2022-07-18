CREATE TABLE `style_like` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `style_id` int,
  `user_id` int,
  CONSTRAINT fk_style_like_style_id_style_id FOREIGN KEY (style_id) REFERENCES style (id) ON DELETE CASCADE,
  CONSTRAINT fk_style_like_user_id_user_id FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE
);