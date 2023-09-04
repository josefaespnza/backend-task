import {open, close} from '../database/connection';
import { getFruitById, getFruitByNameAndVariety, getLastInserted, insertFruitQuery } from '../database/fruitHelpers';
import { FruitIn } from '../models/fruit/fruitInputModel';
import { FruitInformation, FruitOut } from '../models/fruit/fruitOutModel';

const databasePath: string = 'src/database/harvest.db';

export async function getExistingFruitId(fruit: FruitIn) {
    const existingFruit = await getByFruitAndVariety(fruit);
    return existingFruit.id;
}

async function getByFruitAndVariety(fruit: FruitIn) : Promise<FruitOut> {
    return new Promise((resolve, reject) => {
        const db = open(databasePath);
        db.get(getFruitByNameAndVariety, [fruit.name, fruit.variety], async (err: any, row: any) =>{
            if(err){
                reject(new Error(`Error ${err.message}`));
            }
            if(row){
                resolve(new FruitInformation(row.id, row.fruit_name, row.harvest_variety))
            }else{
                const insertedFruitCombination = await insertFruit(fruit);
                resolve(insertedFruitCombination);
            }
        });
        close(db);
    })
}

async function insertFruit(newFruit: FruitIn): Promise<FruitOut>{
    const db = open(databasePath);
    db.run(insertFruitQuery,[
        newFruit.name,
       newFruit.variety
    ] , (err: any) => {
        if(err){
             throw new Error(`Error ${err.message}`);
        }
    })
    const insertedFruit = await getLastInsertion(db);
    close(db);
    return insertedFruit;
    
    

}

async function getLastInsertion(database: any): Promise<FruitOut> {
    return new Promise((resolve, reject) => {
        database.get(getLastInserted, [], (err: any, row: any) =>{
            if(err){
                reject(new Error(`Error ${err.message}`));
            }
            resolve(new FruitInformation(row.id, 
                row.fruit_name, 
                row.harvest_variety))

        });
        

    })
}

export async function getById (id: number) : Promise<FruitOut> {
    return new Promise((resolve, reject) => {
        let field : FruitOut;
        const db = open(databasePath);
        db.get(getFruitById, [id], (err: any, row: any) =>{
            if(err){
                reject(new Error(`Error ${err.message}`));
            }
            field = new FruitInformation(
                row.id,
                row.fruit_name,
                row.harvest_variety)
            
            resolve(field);

        });
        close(db);

    })


}