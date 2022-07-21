CREATE TABLE `product_images` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `url` varchar(255),
  `position` int,
  `product_id` int,
  CONSTRAINT fk_product_images_product_id_product_id FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE
);