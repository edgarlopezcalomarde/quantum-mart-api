
CREATE DATABASE IF NOT EXISTS quantum_mart;
USE quantum_mart;

CREATE TABLE IF NOT EXISTS roles(
   id INT(11) NOT NULL AUTO_INCREMENT,
   rol_name VARCHAR(200) NOT NULL ,
   PRIMARY KEY (id)
);

INSERT INTO roles(rol_name) VALUES ("client"), ("admin");

CREATE TABLE IF NOT EXISTS users (
   id INT(11) NOT NULL AUTO_INCREMENT,
   username VARCHAR(260) NOT NULL ,
   password VARCHAR(300) NOT NULL,
   email VARCHAR(260) NOT NULL,
   rol_id INT(11) NOT NULL,
   created_at TIMESTAMP NOT NULL DEFAULT (NOW()),

   PRIMARY KEY (id),
   FOREIGN KEY (rol_id) REFERENCES roles(id)
);

INSERT INTO users(username, password, email, rol_id) VALUES('root', '1234567890', 'eddy@gmail.com',2);


CREATE TABLE IF NOT EXISTS products (
   id INT(11) NOT NULL AUTO_INCREMENT,
   name VARCHAR(260) NOT NULL ,
   price FLOAT NOT NULL,
   stock INT(11) NOT NULL,
   visible BOOLEAN NOT NULL,
   img MEDIUMBLOB NOT NULL,
   created_at TIMESTAMP NOT NULL DEFAULT (NOW()),

   PRIMARY KEY (id)
);