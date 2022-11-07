import { Book } from "./index";

export class PaperBook implements Book{
    title: string;
    price : number;
    isbn : string;
    weight : number;

    constructor(title : string, price : number, isbn : string, weight : number){
        this.title = title;
        this.price = price;
        this.isbn = isbn;
        this.weight = weight;
    }

    kiir(): void {
        console.log(this.toString());
    }
    toString(): string {
        return this.isbn + ". " + this.title + " " + this.price + "$ " + this.weight + " gramm";
    }
}
