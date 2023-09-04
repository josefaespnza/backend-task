export interface HarvestIn {
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

export class NewHarvestInformation implements HarvestIn{
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



