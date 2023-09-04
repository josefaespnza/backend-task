import { ClientOut } from "../client/clientOutModel";
import { FarmerOut } from "../farmer/farmerOutModel";
import { FieldOut } from "../field/fieldOutModel";
import { FruitOut } from "../fruit/fruitOutModel";

export interface HarvestOut {
    id: number,
    farmer: FarmerOut,
    client: ClientOut,
    field: FieldOut,
    fruit: FruitOut,
}

export class HarvestInformation implements HarvestOut{
    id: number;
    farmer: FarmerOut;
    client: ClientOut;
    field: FieldOut;
    fruit: FruitOut;

    constructor(
        id: number,
        farmer: FarmerOut,
        client: ClientOut,
        field: FieldOut,
        fruit: FruitOut,

    ) {
        this.id = id;
        this.farmer = farmer;
        this.client = client;
        this.field = field;
        this.fruit = fruit;
    }
}
