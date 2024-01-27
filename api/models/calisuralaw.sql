USE `beuma5l7exngin5pxpyt`;

CREATE TABLE `client` (
  `client_id` bigint(20) NOT NULL,
  `client_name` varchar(60) NOT NULL,
  `contact_number` varchar(20) NOT NULL,
  `no_of_transactions` int(11) NOT NULL,
  `account_status` enum('active','deleted') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



CREATE TABLE `record` (
  `record_id` bigint(20) NOT NULL,
  `date` date NOT NULL,
  `transaction` varchar(255) NOT NULL,
  `payments` float NOT NULL,
  `expenses` float NOT NULL,
  `total_amount` float DEFAULT NULL,
  `record_status` enum('active','deleted') NOT NULL,
  `client_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `user` (
  `user_id` bigint(20) NOT NULL,
  `user_name` varchar(60) NOT NULL,
  `user_type` int(2) NOT NULL DEFAULT 1,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `user` (`user_id`, `user_name`, `user_type`, `password`) VALUES
(1, 'venus', 2, '$2a$12$1WJ0t3gtdYDT8oVpA9b/WevJBXb5ezKctV8JkJx2HqRZ8cliS3Zd.'),
(2, 'attyjan', 1, '$2a$12$Mw825z.7zQDI1Bycicnp7.iHPs0yDy6VqAkyDhql/WOn6Bdfi7MEO');

ALTER TABLE `client`
  ADD PRIMARY KEY (`client_id`);


ALTER TABLE `record`
  ADD PRIMARY KEY (`record_id`),
  ADD KEY `client_id` (`client_id`);


ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);


ALTER TABLE `client`
  MODIFY `client_id` bigint(20) NOT NULL AUTO_INCREMENT;


ALTER TABLE `record`
  MODIFY `record_id` bigint(20) NOT NULL AUTO_INCREMENT;


ALTER TABLE `user`
  MODIFY `user_id` bigint(20) NOT NULL AUTO_INCREMENT;


ALTER TABLE `record`
  ADD CONSTRAINT `record_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `client` (`client_id`);
