export interface Harvest {
    id: number;
    farmerEmail: string;
    farmerName: string;
    farmerLastName: string;
    clientEmail: string;
    clientName: string;
    clientLastName: string;
    fieldName: string;
    fieldLocation: string;
    fruit: string;
    harvestVariety: string;
}

export class HarvestInformation implements Harvest{
    id: number;
    farmerEmail: string;
    farmerName: string;
    farmerLastName: string;
    clientEmail: string;
    clientName: string;
    clientLastName: string;
    fieldName: string;
    fieldLocation: string;
    fruit: string;
    harvestVariety: string;

    constructor(
        id: number,
        farmerEmail: string,
        farmerName: string,
        farmerLastName: string,
        clientEmail: string,
        clientName: string,
        clientLastName: string,
        fieldName: string,
        fieldLocation: string,
        fruit: string,
        harvestVariety: string
        

    ) {
        this.id = id;
        this.farmerEmail = farmerEmail;
        this.farmerName = farmerName;
        this.farmerLastName = farmerLastName;
        this.clientEmail = clientEmail;
        this.clientName = clientName;
        this.clientLastName = clientLastName;
        this.fieldName = fieldName;
        this.fieldLocation = fieldLocation;
        this.fruit = fruit;
        this.harvestVariety = harvestVariety;
    }
}

export type HarvestArray = Array<Harvest>;


