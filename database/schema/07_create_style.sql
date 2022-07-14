CREATE TABLE `style` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `content` varchar(255),
  `comment_num` int,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY fk_style_user_id_user_id (user_id) REFERENCES user (id) ON DELETE CASCADE
);