CREATE DATABASE dns_db;

USE dns_db;

CREATE TABLE domains (
    id INT AUTO_INCREMENT PRIMARY KEY,
    domain_name VARCHAR(255) NOT NULL UNIQUE,
    ip_address VARCHAR(45) NOT NULL
);

-- Sample Data
INSERT INTO domains (domain_name, ip_address) VALUES
('google.com', '142.250.183.206');
