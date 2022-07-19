CREATE TABLE `address` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `address` varchar(255),
  `user_id` int,
  CONSTRAINT fk_address_user_id_user_id FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE
);