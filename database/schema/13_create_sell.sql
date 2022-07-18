CREATE TABLE `sell` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `price` int,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `purchase_time` datetime ON UPDATE CURRENT_TIMESTAMP,
  `user_id` int,
  `product_detail_id` int,
  `product_id` int,
  `sell_status_id` int,
  `purchase_id` int,
  FOREIGN KEY fk_sell_user_id_user_id (user_id) REFERENCES user (id) ON DELETE CASCADE,
  FOREIGN KEY fk_sell_product_detail_id_product_detail_id (product_detail_id) REFERENCES product_detail (id) ON DELETE CASCADE,
  FOREIGN KEY fk_sell_purchase_id_user_id (purchase_id) REFERENCES user (id) ON DELETE CASCADE,
  FOREIGN KEY fk_sell_sell_status_id_sell_status_id (sell_status_id) REFERENCES sell_status (id) ON DELETE CASCADE
  FOREIGN KEY fk_sell_product_id_product_id (product_id) REFERENCES product (id) ON DELETE CASCADE
);

