export interface FarmerOut {
    id: number,
    farmerEmail: string;
    farmerName: string;
    farmerLastName: string;
}

export class FarmerInformation implements FarmerOut{
    id: number;
    farmerEmail: string;
    farmerName: string;
    farmerLastName: string;

    constructor(
        id: number,
        farmerEmail: string,
        farmerName: string,
        farmerLastName: string,
    ) {
        this.id = id;
        this.farmerEmail = farmerEmail;
        this.farmerName = farmerName;
        this.farmerLastName = farmerLastName;
    }
}
