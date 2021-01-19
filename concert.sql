DROP DATABASE IF EXISTS concertDB;
CREATE DATABASE concertDB DEFAULT CHARACTER SET utf8;

CREATE TABLE bands(
	id INT UNSIGNED AUTO_INCREMENT,
    band_name VARCHAR(80) NOT NULL
);

CREATE TABLE locations(
	id INT UNSIGNED AUTO_INCREMENT,
    location VARCHAR(80) NOT NULL
);

CREATE TABLE concerts(
	id INT UNSIGNED AUTO_INCREMENT,
    rating TINYINT UNSIGNED NOT NULL,
    band_id INT UNSIGNED,
    location_id INT UNSIGNED, 
    performance_date DATE NOT NULL
);

CREATE OR REPLACE VIEW v_concerts AS
SELECT c.*, l.location, b.band_name  FROM concerts as c
JOIN bands as b ON b.id = c.band_id
JOIN locations as l ON l.id = c.location_id;