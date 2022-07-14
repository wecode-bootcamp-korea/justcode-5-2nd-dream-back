CREATE TABLE `size` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `size` varchar(255),
  `category_id` int,
  FOREIGN KEY fk_size_category_id_category_id (category_id) REFERENCES category (id) ON DELETE CASCADE
);