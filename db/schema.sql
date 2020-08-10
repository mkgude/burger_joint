CREATE DATABASE hamburgers_db;
USE hamburgers_db;

CREATE TABLE hamburgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);