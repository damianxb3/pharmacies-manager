CREATE TABLE pharmacy
(
  id SERIAL PRIMARY KEY,
  address_city VARCHAR(100) NOT NULL,
  address_street VARCHAR(100) NOT NULL,
  address_number VARCHAR(10) NOT NULL
);

CREATE TABLE worker
(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  role VARCHAR(50) NOT NULL,
  workplace_id INTEGER NOT NULL REFERENCES pharmacy (id)
);

CREATE TABLE prescription
(
  id SERIAL PRIMARY KEY,
  doctor_firstname VARCHAR(50) NOT NULL,
  doctor_lastname VARCHAR(50) NOT NULL,
  serial_number VARCHAR(128) NOT NULL
);

CREATE TABLE medicine
(
  id SERIAL PRIMARY KEY,
  price DECIMAL(12, 2) NOT NULL,
  size VARCHAR(20) NOT NULL,
  prescription_required BOOL,
  ingredients TEXT,
  usage TEXT,
  contraindications TEXT
);

CREATE TABLE sale
(
  id SERIAL PRIMARY KEY,
  date TIMESTAMP NOT NULL,
  value DECIMAL(12, 2) NOT NULL,
  seller_id INTEGER NOT NULL REFERENCES worker (id)
);

CREATE TABLE sale_item
(
  id SERIAL PRIMARY KEY,
  sale_id INTEGER NOT NULL REFERENCES sale (id),
  medicine_id INTEGER NOT NULL REFERENCES medicine (id),
  number INTEGER NOT NULL,
  prescription_id INTEGER REFERENCES prescription (id)
);

CREATE TABLE medicine_item
(
  id SERIAL PRIMARY KEY,
  number INTEGER NOT NULL,
  pharmacy_id INTEGER NOT NULL REFERENCES pharmacy (id),
  medicine_info_id INTEGER NOT NULL REFERENCES medicine (id)
);

CREATE TABLE medicine_replacement
(
  medicine_info_id INTEGER NOT NULL REFERENCES medicine (id),
  replacement_info_id INTEGER NOT NULL REFERENCES medicine (id)
);