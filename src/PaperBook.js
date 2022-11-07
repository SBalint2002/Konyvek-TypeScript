"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaperBook = void 0;
class PaperBook {
    constructor(title, price, isbn, weight) {
        this.title = title;
        this.price = price;
        this.isbn = isbn;
        this.weight = weight;
    }
    kiir() {
        console.log(this.toString());
    }
    toString() {
        return this.isbn + ". " + this.title + " " + this.price + "$ " + this.weight + " gramm";
    }
}
exports.PaperBook = PaperBook;
