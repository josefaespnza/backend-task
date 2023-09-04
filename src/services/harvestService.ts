import { getQuery, insertQuery } from '../database/helpers';
import {open, close} from '../database/connection'
import { HarvestIn } from '../models/harvest/harvestInputModel';
import { HarvestInformation, HarvestOut } from '../models/harvest/harvestOutModel';

const databasePath: string = 'src/database/harvest.db';

export async function getAllHarvest () {
    return new Promise((resolve, _reject) => {
        const harvests: Array<HarvestOut> = [];
        const db = open(databasePath);
        db.all(getQuery, [], (err: any, rows: Array<any>) =>{
            if(err){
                throw new Error(`Error ${err.message}`);
            }
            rows.forEach(row => {
                harvests.push(new HarvestInformation(
                    row.harvest_id,
                    row.farmer_email,
                    row.farmer_name,
                    row.farmer_last_name,
                    row.client_email,
                    row.client_name,
                    row.client_last_name,
                    row.field_name,
                    row.field_location,
                    row.fruit,
                    row.harvest_variety
                ))
            });
            resolve(harvests);

        });
        close(db);
        

    })


}

export async function insertHarvest(newHarvest: HarvestIn) {
    const db = open(databasePath);
    db.run(insertQuery, [
        newHarvest.farmerEmail,
        newHarvest.farmerName,
        newHarvest.farmerLastName,
        newHarvest.clientEmail,
        newHarvest.clientName,
        newHarvest.clientLastName,
        newHarvest.fieldName,
        newHarvest.fieldLocation,
        newHarvest.fruit,
        newHarvest.harvestVariety
    ], (err: any)=>{
        if(err){
            throw new Error(`Error ${err.message}`);
        }
        
    })
    
    close(db);

}

export async function insertMany(harvestArray: Array<HarvestIn>) {
    const db = open(databasePath);
    harvestArray.forEach(harvest =>{
        db.run(insertQuery, [
            harvest.farmerEmail,
            harvest.farmerName,
            harvest.farmerLastName,
            harvest.clientEmail,
            harvest.clientName,
            harvest.clientLastName,
            harvest.fieldName,
            harvest.fieldLocation,
            harvest.fruit,
            harvest.harvestVariety
        ], (err: any)=>{
            if(err){
                throw new Error(`Error ${err.message}`);
            }
            
        })

    })
    close(db);
}