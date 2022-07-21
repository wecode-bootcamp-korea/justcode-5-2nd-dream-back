CREATE TABLE `sub_category` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `sub_category` varchar(255),
  `category_id` int,
  CONSTRAINT fk_sub_category_category_id_category_id FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE
);