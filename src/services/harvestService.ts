import { getQuery, insertQuery } from '../database/helpers';
import {open, close} from '../database/connection'

const databasePath: string = "src/database/harvest.db";

export async function getAllHarvest () {
    return new Promise((resolve, _reject) => {
        const db = open(databasePath);
        db.all(getQuery, [], (err: any, rows: Array<any>) =>{
            if(err){
                throw new Error(`Error ${err.message}`);
            }
            resolve(rows);

        });
        close(db);
        

    })


}

export async function insertHarvest(
    farmerEmail: string,
    farmerName: string,
    farmerLastName: string,
    clientEmail: string,
    clientName: string,
    clientLastName: string,
    fieldName: string,
    fieldLocation: string,
    fruit: string,
    harvestVariety: string,
) {
    const db = open(databasePath);
    db.run(insertQuery, [
        farmerEmail,
        farmerName,
        farmerLastName,
        clientEmail,
        clientName,
        clientLastName,
        fieldName,
        fieldLocation,
        fruit,
        harvestVariety
    ], (err: any)=>{
        if(err){
            throw new Error(`Error ${err.message}`);
        }
        
    })
    
    close(db);

}