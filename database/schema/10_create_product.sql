CREATE TABLE `product` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `comment` varchar(255),
  `model_number` varchar(255),
  `color` varchar(255),
  `sex` varchar(255),
  `category_id` int,
  `sub_category_id` int,
  `brand_id` int,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_product_brand_id_brand_id FOREIGN KEY (brand_id) REFERENCES brand (id) ON DELETE CASCADE,
  CONSTRAINT fk_product_category_id_category_id FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE,
  CONSTRAINT fk_product_sub_category_id_sub_category_id FOREIGN KEY (sub_category_id) REFERENCES sub_category (id) ON DELETE CASCADE
);