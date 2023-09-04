
import { getClientByEmail, getClientById, getLastInserted, insertClientQuery } from '../database/clientHelpers';
import {open, close} from '../database/connection';
import { ClientIn } from '../models/client/clientInputModel';
import { ClientInformation, ClientOut } from '../models/client/clientOutModel';

const databasePath: string = 'src/database/harvest.db';

export async function getExistingClientId(client: ClientIn) {
    let existingClient = await getByEmail(client);
    return existingClient.id;
    
}

async function getByEmail(client: ClientIn) : Promise<ClientOut> {
    return new Promise((resolve, reject) => {
        const db = open(databasePath);
        db.get(getClientByEmail, [client.email], async (err: any, row: any) =>{
            if(err){
                reject(new Error(`Error ${err.message}`));
            }
            if(row){
                resolve(new ClientInformation(
                    row.id,
                    row.client_email,
                    row.client_name,
                    row.client_last_name
                ))
            } else{
                const insertedClient = await insertClient(client);
                resolve(insertedClient);  
            }
                 
        });
        close(db);
        

    })
}

async function insertClient(newClient: ClientIn): Promise<ClientOut>{
    const db = open(databasePath);
    db.run(insertClientQuery,[
        newClient.email,
        newClient.name,
        newClient.lastName
    ] , (err: any) => {
        if(err){
             throw new Error(`Error ${err.message}`);
        }
    })
    const insertedClient = await getLastInsertion(db);
    close(db);
    return insertedClient;

}

async function getLastInsertion(database: any): Promise<ClientOut> {
    return new Promise((resolve, reject) => {
        database.get(getLastInserted, [], (err: any, row: any) =>{
            if(err){
                reject(new Error(`Error ${err.message}`));
            }
            resolve(new ClientInformation(
                row.id,
                row.client_email,
                row.client_name,
                row.client_last_name
            ))
        });
    })
}

export async function getById (id: number) : Promise<ClientOut> {
    return new Promise((resolve, reject) => {
        let client : ClientOut;
        const db = open(databasePath);
        db.get(getClientById, [id], (err: any, row: any) =>{
            if(err){
                reject(new Error(`Error ${err.message}`));
            }
            client = new ClientInformation(
                row.id,
                row.client_email,
                row.client_name,
                row.client_last_name)
            
            resolve(client);

        });
        close(db);
        

    })


}