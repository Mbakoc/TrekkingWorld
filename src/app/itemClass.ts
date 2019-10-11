export class itemClass {
    id: string;
    name: string;
    price: number;
    description: string;
    url: string;

    constructor(id: string, name: string, price: number, description: string, url: string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.url = url;
    }

}