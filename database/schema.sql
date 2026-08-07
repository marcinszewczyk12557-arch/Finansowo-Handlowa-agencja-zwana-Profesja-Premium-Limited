CREATE TABLE users (
 id SERIAL PRIMARY KEY,
 company_name VARCHAR(255),
 name VARCHAR(255),
 email VARCHAR(255) UNIQUE,
 password_hash TEXT,
 role VARCHAR(50) DEFAULT 'CLIENT'
);

CREATE TABLE products (
 id SERIAL PRIMARY KEY,
 name VARCHAR(255),
 description TEXT,
 category VARCHAR(100),
 price VARCHAR(100)
);

CREATE TABLE offers (
 id SERIAL PRIMARY KEY,
 number VARCHAR(50),
 product VARCHAR(255),
 status VARCHAR(50) DEFAULT 'NEW'
);
