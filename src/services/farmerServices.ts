import { getFarmerByEmail, getFarmerById, getLastInserted, insertFarmerQuery } from '../database/farmerHelpers';
import {open, close} from '../database/connection'
import { FarmerIn } from '../models/farmer/farmerInputModel';
import { FarmerInformation, FarmerOut } from '../models/farmer/farmerOutModel';

const databasePath: string = 'src/database/harvest.db';

export async function getExistingFarmerId(farmer: FarmerIn) {
    const existingFarmer = await getByEmail(farmer);
    return existingFarmer.id;
}

async function getByEmail(farmer: FarmerIn) : Promise<FarmerOut> {
    return new Promise((resolve, reject) => {
        const db = open(databasePath);
        db.get(getFarmerByEmail, [farmer.email], async (err: any, row: any) =>{
            if(err){
                reject(new Error(`Error ${err.message}`));
            }
            if(row) {
                resolve(new FarmerInformation(row.id, 
                    row.farmer_email,
                    row.farmer_name,
                    row.farmer_last_name))
            }else{
                const insertedFarmer = await insertFarmer(farmer);
                resolve(insertedFarmer);  
            }
        });
        close(db);
    })
}

async function insertFarmer(newFarmer: FarmerIn): Promise<FarmerOut>{
    const db = open(databasePath);
    db.run(insertFarmerQuery,[
        newFarmer.email,
        newFarmer.name,
        newFarmer.lastName
    ] , (err: any) => {
        if(err){
             throw new Error(`Error ${err.message}`);
        }
    })
    const insertedFarmer = await getLastInsertion(db);
    close(db);
    return insertedFarmer;
    
    

}

async function getLastInsertion(database: any): Promise<FarmerOut> {
    return new Promise((resolve, reject) => {
        database.get(getLastInserted, [], (err: any, row: any) =>{
            if(err){
                reject(new Error(`Error ${err.message}`));
            }
            resolve(new FarmerInformation(
                row.id,
                row.farmer_email,
                row.farmer_name,
                row.farmer_last_name
            ))
        });
    })
}



export async function getById (id: number) : Promise<FarmerOut> {
    return new Promise((resolve, reject) => {
        let farmer : FarmerOut;
        const db = open(databasePath);
        db.get(getFarmerById, [id], (err: any, row: any) =>{
            if(err){
                reject(new Error(`Error ${err.message}`));
            }
            farmer = new FarmerInformation(
                row.id,
                row.farmer_email,
                row.farmer_name,
                row.farmer_last_name)
            
            resolve(farmer);

        });
        close(db);
        

    })
}

