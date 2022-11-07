import { Book } from "./index";

export class Ebook implements Book{
    title: string;
    price : number;
    isbn : string;
    size : number;

    constructor(title : string, price : number, isbn : string, size : number){
        this.title = title;
        this.price = price;
        this.isbn = isbn;
        this.size = size;
    }

    kiir(): void {
        console.log(this.toString());
    }
    toString(): string {
        return this.isbn + ". " + this.title + " " + this.price + "$ " + this.size + " kB";
    }
}