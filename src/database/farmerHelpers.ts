export const farmerTableCreationQuery = 'CREATE TABLE farmers(\
    id INTEGER PRIMARY KEY AUTOINCREMENT, \
    farmer_email VARCHAR(50) UNIQUE NOT NULL, \
    farmer_name VARCHAR(50) NOT NULL, \
    farmer_last_name VARCHAR(50) NOT NULL \
    )';

export const insertFarmerQuery =  'INSERT INTO farmers (\
    farmer_email, farmer_name, farmer_last_name) \
    VALUES (?,?,?)';

export const getFarmerById = 'SELECT * FROM farmers WHERE id=?'

export const getFarmerByEmail = 'SELECT * FROM farmers WHERE farmer_email=?'

export const getLastInserted = 'SELECT * FROM farmers ORDER BY id DESC LIMIT 1'