export const fieldTableCreationQuery = 'CREATE TABLE fields(\
    id INTEGER PRIMARY KEY AUTOINCREMENT, \
    field_name VARCHAR(50) NOT NULL, \
    field_location VARCHAR(50) NOT NULL, \
    CONSTRAINT unique_field UNIQUE(field_name, field_location) \
    )'

export const insertFieldQuery =  'INSERT INTO  fields (\
    field_name, field_location) \
    VALUES (?,?)';

export const getFieldById = 'SELECT * FROM fields WHERE id=?';

export const getFieldByNameAndLocation = 'SELECT * FROM fields WHERE field_name=? AND field_location=?'

export const getLastInserted = 'SELECT * FROM fields ORDER BY id DESC LIMIT 1'