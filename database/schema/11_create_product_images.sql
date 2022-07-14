CREATE TABLE `product_images` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `url` varchar(255),
  `position` int,
  `product_id` int,
  FOREIGN KEY fk_product_images_product_id_product_id (product_id) REFERENCES product (id) ON DELETE CASCADE
);