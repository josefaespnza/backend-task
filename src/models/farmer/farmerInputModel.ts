export interface FarmerIn {
    email: string;
    name: string;
    lastName: string;
}

export class NewFarmerInformation implements FarmerIn{
    email: string;
    name: string;
    lastName: string;

    constructor(
        email: string,
        name: string,
        lastName: string,
    ) {
        this.email = email;
        this.name = name;
        this.lastName = lastName;
    }
}
