export interface FieldOut {
    id: number;
    name: string;
    location: string;
}

export class FieldInformation implements FieldOut{
    id: number;
    name: string;
    location: string;

    constructor(
        id: number,
        name: string,
        location: string,
    ){
        this.id = id;
        this.name = name;
        this.location = location;
    }
}