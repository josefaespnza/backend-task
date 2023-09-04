export interface FruitIn {
    name: string,
    variety: string,
}

export class NewFruitInformation implements FruitIn{
    name: string;
    variety: string;

    constructor(
        name: string,
        variety: string,
    ){
        this.name = name;
        this.variety = variety;
    }
}