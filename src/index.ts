import { PaperBook } from "./PaperBook";
import { Ebook } from "./Ebook";

export interface Book {
    title : string;
    price : number;
    isbn : string;

    kiir() : void;
    toString() : string;
}

let konyvek: Book[] = [];


document.addEventListener("DOMContentLoaded", () => {
    (document.getElementById("paperbook") as HTMLElement).style.display = "none";
    document.getElementById("valasztas")?.addEventListener('click', () => {
        if((document.getElementById('ebookradio') as HTMLInputElement).checked){
            (document.getElementById("paperbook") as HTMLElement).style.display = "none";
            (document.getElementById("ebook") as HTMLElement).style.display = "block";
        }else if((document.getElementById('paperbookradio') as HTMLInputElement).checked){
            (document.getElementById("ebook") as HTMLElement).style.display = "none";
            (document.getElementById("paperbook") as HTMLElement).style.display = "block";
        }
    })
});