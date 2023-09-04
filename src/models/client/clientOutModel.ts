export interface ClientOut {
    id: number,
    email: string;
    name: string;
    lastName: string;
}

export class ClientInformation implements ClientOut{
    id: number;
    email: string;
    name: string;
    lastName: string;

    constructor(
        id: number,
        email: string,
        name: string,
        lastName: string,
    ) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.lastName = lastName;
    }
}