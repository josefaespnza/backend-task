export const  creationHarvestQuery = 'CREATE TABLE harvests( \
    harvest_id INTEGER PRIMARY KEY AUTOINCREMENT, \
    farmer_id INTEGER NOT NULL, \
    client_id INTEGER NOT NULL, \
    field_id INTEGER NOT NULL, \
    fruit_id INTEGER NOT NULL, \
    FOREIGN KEY(fruit_id) REFERENCES fruits(id) ON DELETE CASCADE, \
    FOREIGN KEY(field_id) REFERENCES fields(id) ON DELETE CASCADE, \
    FOREIGN KEY(client_id) REFERENCES clients(id) ON DELETE CASCADE, \
    FOREIGN KEY(farmer_id) REFERENCES farmers(id) ON DELETE CASCADE \
    )';

export const getAllHarvestQuery = "SELECT * FROM harvests";

export const insertHarvestQuery = 'INSERT INTO harvests (\
    farmer_id, client_id, field_id, \
    fruit_id) VALUES (?,?,?,?)';
