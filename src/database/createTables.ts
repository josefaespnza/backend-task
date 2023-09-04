import {open, close} from './connection'
import { clientTableCreationQuery } from './clientHelpers';
import { farmerTableCreationQuery } from './farmerHelpers';
import { fieldTableCreationQuery } from './fieldHelpers';
import { fruitTableCreationQuery } from './fruitHelpers';
import { creationHarvestQuery } from './harvestHelpers';

const databasePath: string = 'src/database/harvest.db';
export function initializeDatabase(){
    const db = open(databasePath);
    db.run(clientTableCreationQuery, (err: any) => {
        if (err) {
            console.log('clients table is up!')
        }} 
    
        );
    db.run(farmerTableCreationQuery, (err: any) => {
        if (err) {
            console.log('farmers table is up!')
        }});
    db.run(fieldTableCreationQuery, (err: any) => {
        if (err) {
            console.log('fields table is up!')
        }});
    db.run(fruitTableCreationQuery, (err: any) => {
        if (err) {
            console.log('fruits table is up!')
        }});
    db.run(creationHarvestQuery, (err: any) => {
        if (err) {
            console.log('harvets table is up!')
        }});
    close(db);
}


