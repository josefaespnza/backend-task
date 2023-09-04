export interface FruitOut {
    id: number,
    name: string,
    variety: string,
}

export class FruitInformation implements FruitOut{
    id: number;
    name: string;
    variety: string;

    constructor(
        id: number,
        name: string,
        variety: string,
    ){
        this.id = id;
        this.name = name;
        this.variety = variety;
    }
}