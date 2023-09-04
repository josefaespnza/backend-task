import {open, close} from '../database/connection';
import { getFieldById, getFieldByNameAndLocation, getLastInserted, insertFieldQuery } from '../database/fieldHelpers';
import { FieldIn } from '../models/field/fieldInputModel';
import { FieldInformation, FieldOut } from '../models/field/fieldOutModel';


const databasePath: string = 'src/database/harvest.db';

export async function getExistingFieldId(field: FieldIn) {
    const existingField = await getByNameAndLocaton(field);
    return existingField.id;
}

async function getByNameAndLocaton(field: FieldIn) : Promise<FieldOut> {
    return new Promise((resolve, reject) => {
        const db = open(databasePath);
        db.get(getFieldByNameAndLocation, [field.name, field.location], async (err: any, row: any) =>{
            if(err){
                reject(new Error(`Error ${err.message}`));
            }if(row){
                resolve(new FieldInformation(row.id, 
                    row.field_name, 
                    row.field_location))
            }else{
                const insertedField = await insertField(field);
                resolve(insertedField);
            }
        });
        close(db);
        
    })
}

async function insertField(newField: FieldIn): Promise<FieldOut>{
    const db = open(databasePath);
    db.run(insertFieldQuery,[
        newField.name,
        newField.location
    ] , (err: any) => {
        if(err){
             throw new Error(`Error ${err.message}`);
        }
    })
    const insertedField = await getLastInsertion(db);
    close(db);
    return insertedField
    
}

async function getLastInsertion(database: any): Promise<FieldOut> {
    return new Promise((resolve, reject) => {
        database.get(getLastInserted, [], (err: any, row: any) =>{
            if(err){
                reject(new Error(`Error ${err.message}`));
            }
            resolve(new FieldInformation(
                row.id,
                row.field_name,
                row.field_location
            ))

        });
        

    })
}


export async function getById (id: number) : Promise<FieldOut> {
    return new Promise((resolve, reject) => {
        let field : FieldOut;
        const db = open(databasePath);
        db.get(getFieldById, [id], (err: any, row: any) =>{
            if(err){
                reject(new Error(`Error ${err.message}`));
            }
            field = new FieldInformation(
                row.id,
                row.field_name,
                row.field_location)
            
            resolve(field);

        });
        close(db);
        

    })


}