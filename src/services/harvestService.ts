import { getAllHarvestQuery, insertHarvestQuery } from '../database/harvestHelpers';
import {open, close} from '../database/connection'
import { HarvestIn } from '../models/harvest/harvestInputModel';
import { HarvestInformation, HarvestOut } from '../models/harvest/harvestOutModel';
import * as farmerServices from './farmerServices';
import * as clientServices from './clientServices';
import * as fieldServices from './fieldServices';
import * as fruitServices from './fruitServices';
import { FarmerOut } from '../models/farmer/farmerOutModel';
import { ClientOut } from '../models/client/clientOutModel';
import { FieldOut } from '../models/field/fieldOutModel';
import { FruitOut } from '../models/fruit/fruitOutModel';

const databasePath: string = 'src/database/harvest.db';

export async function getAllHarvest () {
    return new Promise((resolve, reject) => {
        const db = open(databasePath);
        db.all(getAllHarvestQuery, [], async (err: any, rows: Array<any>) =>{
            if(err){
                reject(new Error(`Error ${err.message}`));
            }
            resolve(await parseRows(rows));
        });
        close(db);
    })
}

async function parseRows(rows: Array<any>): Promise<HarvestOut[]>{
    const harvests: Array<HarvestOut> = [];
    for(const row of rows){
        const parsedRow = await extractInformation(row)
        harvests.push(parsedRow) 
    }
    return harvests;
}

async function extractInformation(row: any) {
    const farmer: FarmerOut = await farmerServices.getById(row.farmer_id);
    const client: ClientOut = await clientServices.getById(row.client_id);
    const field: FieldOut = await fieldServices.getById(row.field_id);
    const fruit: FruitOut = await fruitServices.getById(row.fruit_id);
    return new HarvestInformation(
        row.harvest_id,
        farmer,
        client,
        field,
        fruit,
    )
}


export async function insertHarvest(newHarvest: HarvestIn) {
    const db = open(databasePath);
    try{
        const {farmer_id, client_id, field_id, fruit_id} = await getForeignKeys(newHarvest);
        db.run(insertHarvestQuery, [
            farmer_id,
            client_id,
            field_id,
            fruit_id
        ], (err: any)=>{
            if(err){
                throw new Error(`Error ${err.message}`);
            }
        })
    } catch(err) {
        console.log(err);
    }
    
    close(db);

}


export async function insertMany(harvestArray: Array<HarvestIn>) {
    const db = open(databasePath);
    for (let index = 0; index < harvestArray.length; index++) {
        const harvest = harvestArray[index];
        const {farmer_id, client_id, field_id, fruit_id} = await getForeignKeys(harvest);
        db.run(insertHarvestQuery, [
            farmer_id,
            client_id,
            field_id,
            fruit_id
        ], (err: any)=>{
            if(err){
                throw new Error(`Error ${err.message}`);
            }
        })
    }
    close(db);
}

async function getForeignKeys(harvest: HarvestIn){
    try{
        const farmer_id = await farmerServices.getExistingFarmerId(harvest.farmer);
        const client_id = await clientServices.getExistingClientId(harvest.client);
        const field_id = await fieldServices.getExistingFieldId(harvest.field);
        const fruit_id = await fruitServices.getExistingFruitId(harvest.fruit);
        return {farmer_id, client_id,field_id, fruit_id }
    } catch(err: any){
        throw new Error(`Error ${err.message}`);
    }
}