CREATE TABLE `style_product_list` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `style_id` int,
  `product_id` int,
  CONSTRAINT fk_style_product_list_style_id_style_id FOREIGN KEY (style_id) REFERENCES style (id) ON DELETE CASCADE,
  CONSTRAINT fk_style_product_list_product_id_product_id FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE
);