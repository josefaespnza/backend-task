export interface FieldIn {
    name: string;
    location: string;
}

export class NewFieldInformation implements FieldIn{
    name: string;
    location: string;

    constructor(
        name: string,
        location: string,
    ){
        this.name = name;
        this.location = location;
    }
}