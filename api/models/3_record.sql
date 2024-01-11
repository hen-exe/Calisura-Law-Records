USE calisuralaw;

CREATE TABLE `record` (
    `record_id` bigint(20) NOT NULL AUTO_INCREMENT,
    `date` date NOT NULL,
    `transaction` varchar(255) NOT NULL,
    `payments` float NOT NULL,
    `expenses` float NOT NULL,
    `total_amount` float NULL,
    `record_status` enum('active','deleted') NOT NULL,
    `client_id` bigint(20) NOT NULL,

    PRIMARY KEY (`record_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


ALTER TABLE `record`
  ADD KEY `client_id` (`client_id`);

ALTER TABLE `record`
  ADD CONSTRAINT `record_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `client` (`client_id`);
