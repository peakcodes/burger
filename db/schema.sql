CREATE DATABASE burger_db;
USE burgers_db;


CREATE TABLE "burgers" (
  "id" int(11) NOT NULL AUTO_INCREMENT,
  "burger_name" varchar(50) NOT NULL,
  "devour" tinyint(1) DEFAULT '0',
  PRIMARY KEY ("id")