USE calisuralaw;

CREATE TABLE `client` (
  `client_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `client_name` varchar(60) NOT NULL,
  `contact_number` varchar(20) NOT NULL,
  `no_of_transactions` int(11) NOT NULL,
  `account_status` enum('active','deleted') NOT NULL,
  
  PRIMARY KEY (`client_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
