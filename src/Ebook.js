"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ebook = void 0;
class Ebook {
    constructor(title, price, isbn, size) {
        this.title = title;
        this.price = price;
        this.isbn = isbn;
        this.size = size;
    }
    kiir() {
        console.log(this.toString());
    }
    toString() {
        return this.isbn + ". " + this.title + " " + this.price + "$ " + this.size + " kB";
    }
}
exports.Ebook = Ebook;
