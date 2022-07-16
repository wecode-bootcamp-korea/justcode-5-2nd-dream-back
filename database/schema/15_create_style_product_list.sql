CREATE TABLE `style_product_list` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `style_id` int,
  `product_id` int,
  FOREIGN KEY fk_style_product_list_style_id_style_id (style_id) REFERENCES style (id) ON DELETE CASCADE,
  FOREIGN KEY fk_style_product_list_product_id_product_id (product_id) REFERENCES product (id) ON DELETE CASCADE
);