Projeto nodejs

<P>CREATE DATABASE teste_backend</p>

<p>CREATE TABLE `teste_backend`.`user` (`id` INT(100) NOT NULL AUTO_INCREMENT , `nome` VARCHAR(100) NOT NULL , `email` VARCHAR(100) NOT NULL UNIQUE, `password` VARCHAR(100) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;</p>

<p>CREATE TABLE `report_ticket_db`.`event` (`id` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(100) NOT NULL , `description` TEXT NOT NULL , `image` BLOB NOT NULL , `data` DATE NOT NULL , `place` TEXT NOT NULL , `coordinates` INT NOT NULL , `important_info` TEXT NOT NULL , `map` BLOB NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;</p>

<p>CREATE TABLE `report_ticket_db`.`ticket` (`ticket_id` INT NOT NULL AUTO_INCREMENT , `id` INT NOT NULL , `bar_code` TEXT NOT NULL , `qr_code` TEXT NOT NULL , `price` DOUBLE NOT NULL, `type` TEXT NOT NULL , PRIMARY KEY (`ticket_id`), FOREIGN KEY (id) REFERENCES event(id)) ENGINE = InnoDB;</p>