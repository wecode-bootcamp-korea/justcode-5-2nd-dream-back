CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255),
  `phone` varchar(255),
  `name` varchar(255),
  `image` varchar(255),
  `social_id` varchar(255),
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `updated_at` datetime ON UPDATE CURRENT_TIMESTAMP
);