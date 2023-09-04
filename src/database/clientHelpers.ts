export const clientTableCreationQuery = 'CREATE TABLE clients(\
    id INTEGER PRIMARY KEY AUTOINCREMENT, \
    client_email VARCHAR(50) UNIQUE NOT NULL, \
    client_name VARCHAR(50) NOT NULL, \
    client_last_name VARCHAR(50) NOT NULL \
    )';

export const insertClientQuery =  'INSERT INTO clients (\
    client_email, client_name, client_last_name) \
    VALUES (?,?,?)';

export const getClientById = 'SELECT * FROM clients WHERE id=?'

export const getClientByEmail = 'SELECT * FROM clients WHERE client_email=?'

export const getLastInserted = 'SELECT * FROM clients ORDER BY id DESC LIMIT 1'