export class Enterprise {
    id?: number;
    name: string;
    logo: string;
    des: string;
    headquarters: string;

    constructor(name: string, logo: string) {
        this.name = name;
        this.logo = logo;
    }
}
