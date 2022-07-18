CREATE TABLE `wish` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `product_detali_id` int,
  `user_id` int,
  FOREIGN KEY fk_wish_product_detali_id_product_detali_id (product_detali_id) REFERENCES product_detali (id) ON DELETE CASCADE,
  FOREIGN KEY fk_wish_user_id_user_id (user_id) REFERENCES user (id) ON DELETE CASCADE
);