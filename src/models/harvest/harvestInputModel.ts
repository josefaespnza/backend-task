import { ClientIn, NewClientInformation } from "../client/clientInputModel";
import { FarmerIn, NewFarmerInformation } from "../farmer/farmerInputModel";
import { FieldIn, NewFieldInformation } from "../field/fieldInputModel";
import { FruitIn, NewFruitInformation } from "../fruit/fruitInputModel";

export interface HarvestIn {
    farmer: FarmerIn,
    client: ClientIn,
    field: FieldIn,
    fruit: FruitIn
}

export class NewHarvestInformation implements HarvestIn{
    farmer: FarmerIn;
    client: ClientIn;
    field: FieldIn;
    fruit: FruitIn;

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
        this.farmer = new NewFarmerInformation(farmerEmail, farmerName, farmerLastName);
        this.client = new NewClientInformation(clientEmail, clientName, clientLastName);
        this.field = new NewFieldInformation(fieldName, fieldLocation);
        this.fruit = new NewFruitInformation(fruit, harvestVariety);
    }
}



