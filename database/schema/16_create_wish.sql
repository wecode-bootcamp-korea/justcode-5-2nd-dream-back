CREATE TABLE `wish` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `product_detail_id` int,
  `user_id` int,
  CONSTRAINT fk_wish_product_detail_id_product_detail_id FOREIGN KEY (product_detail_id) REFERENCES product_detail (id) ON DELETE CASCADE,
  CONSTRAINT fk_wish_user_id_user_id FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE
);