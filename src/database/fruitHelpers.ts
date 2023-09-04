export const fruitTableCreationQuery = 'CREATE TABLE fruits(\
    id INTEGER PRIMARY KEY AUTOINCREMENT, \
    fruit_name VARCHAR(50) NOT NULL, \
    harvest_variety VARCHAR(50) NOT NULL, \
    CONSTRAINT unique_fruit_variety UNIQUE(fruit_name, harvest_variety) \
    )'

export const insertFruitQuery =  'INSERT INTO fruits (\
    fruit_name, harvest_variety) \
    VALUES (?,?)';

export const getFruitById = 'SELECT * FROM fruits WHERE id=?'

export const getFruitByNameAndVariety = 'SELECT * FROM fruits WHERE fruit_name=? AND harvest_variety=?'

export const getLastInserted = 'SELECT * FROM fruits ORDER BY id DESC LIMIT 1'