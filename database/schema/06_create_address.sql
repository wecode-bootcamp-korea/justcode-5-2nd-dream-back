CREATE TABLE `address` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `address` varchar(255),
  `user_id` int,
  FOREIGN KEY fk_address_user_id_user_id (user_id) REFERENCES user (id) ON DELETE CASCADE
);