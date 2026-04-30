CREATE DATABASE IF NOT EXISTS school;
USE school;

CREATE TABLE IF NOT EXISTS classes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
    id CHAR(9) PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(100),
    role ENUM('student', 'teacher') NOT NULL,
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES classes(id)
);

CREATE TABLE IF NOT EXISTS locations (
    user_id CHAR(9) PRIMARY KEY,
    longitude DECIMAL(10,6),
    latitude DECIMAL(10,6),
    time DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(id)
);