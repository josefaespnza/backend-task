export interface ClientIn {
    email: string;
    name: string;
    lastName: string;
}

export class NewClientInformation implements ClientIn{
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
