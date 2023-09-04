export const  creationQuery = 'CREATE TABLE harvests( \
    harvest_id INTEGER PRIMARY KEY AUTOINCREMENT, \
    farmer_email VARCHAR(50) UNIQUE NOT NULL, \
    farmer_name VARCHAR(50) NOT NULL, \
    farmer_last_name VARCHAR(50) NOT NULL, \
    client_email VARCHAR(50) UNIQUE NOT NULL, \
    client_name VARCHAR(50) NOT NULL, \
    client_last_name VARCHAR(50) NOT NULL, \
    field_name VARCHAR(50) NOT NULL, \
    field_location VARCHAR(100) NOT NULL, \
    fruit VARCHAR(50) NOT NULL, \
    harvest_variety VARCHAR NOT NULL, \
    CONSTRAINT unique_field UNIQUE(field_name, field_location), \
    CONSTRAINT unique_fruit_variety UNIQUE(fruit, harvest_variety) \
    )';

export const getQuery = "SELECT * FROM harvests";

export const insertQuery = 'INSERT INTO harvests (\
    farmer_email, farmer_name, farmer_last_name, \
    client_email, client_name, client_last_name, \
    field_name, field_location, \
    fruit, harvest_variety) VALUES (?,?,?,?,?,?,?,?,?,?)';
