import sqlite3 from 'sqlite3';

export const open = (database: string) => {
    const db = new sqlite3.Database(database, (err: any) => {
        if(err){
            console.log("Error opening database " + err.message);
        }
    });
    return db;
}

export const close = (database: any) => {
    database.close((err: any) => {
        if (err) {
            return console.error(err);
        }
    });
}
