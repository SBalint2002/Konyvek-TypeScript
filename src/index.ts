import { PaperBook } from "./PaperBook";
import { Ebook } from "./Ebook";

export interface Book {
    title : string;
    price : number;
    isbn : string;

    kiir() : void;
    toString() : string;
}