DROP DATABASE IF EXISTS employee_Tracker_db;
CREATE DATABASE employee_Tracker_db;

USE employee_Tracker_db;

CREATE TABLE IF NOT EXISTS department (
id INTEGER(11) AUTO_INCREMENT NOT NULL,
name VARCHAR(30),
PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS role (
id INTEGER(11) AUTO_INCREMENT NOT NULL,
title VARCHAR(30),
salary DECIMAL(12, 2),
department_id INTEGER(11), 
PRIMARY KEY (id),
FOREIGN KEY (department_id) REFERENCES department (id)
);

CREATE TABLE IF NOT EXISTS employee (
id INTEGER(11) AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INTEGER(11),
manager_id INTEGER(11) NULL,
PRIMARY KEY (id),
FOREIGN KEY (role_id) REFERENCES role (id),
FOREIGN KEY (manager_id) REFERENCES employee (id)
);