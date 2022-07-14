CREATE TABLE `style_image` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `style_id` int,
  `url` varchar(255),
  FOREIGN KEY fk_style_image_style_id_style_id (style_id) REFERENCES style (id) ON DELETE CASCADE
); 