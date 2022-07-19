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
  CONSTRAINT fk_sell_user_id_user_id FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE,
  CONSTRAINT fk_sell_product_detail_id_product_detail_id FOREIGN KEY (product_detail_id) REFERENCES product_detail (id) ON DELETE CASCADE,
  CONSTRAINT fk_sell_sell_status_id_sell_status_id FOREIGN KEY (sell_status_id) REFERENCES sell_status (id) ON DELETE CASCADE,
  CONSTRAINT fk_sell_purchase_id_user_id FOREIGN KEY (purchase_id) REFERENCES user (id) ON DELETE CASCADE,
  CONSTRAINT fk_sell_product_id_product_id FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE
);