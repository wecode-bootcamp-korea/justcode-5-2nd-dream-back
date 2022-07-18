CREATE TABLE `style_image` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `style_id` int,
  `url` varchar(255),
  CONSTRAINT fk_style_image_style_id_style_id FOREIGN KEY (style_id) REFERENCES style (id) ON DELETE CASCADE
); 