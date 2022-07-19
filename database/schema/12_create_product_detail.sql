CREATE TABLE `product_detail` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `product_id` int,
  `size_id` int,
  `price` int,
  CONSTRAINT fk_product_detail_product_id_product_id FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE,
  CONSTRAINT fk_product_detail_size_id_size_id FOREIGN KEY (size_id) REFERENCES size (id) ON DELETE CASCADE
);