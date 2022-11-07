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
let ellenorzo = false;
let element : HTMLInputElement;


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

    //Ebook könyv ellenőrzés és feltöltés
    document.getElementById('ebookbutton')?.addEventListener('click', () => {

        //title
        element = document.getElementById('ebooktitle')as HTMLInputElement;
        if(element.value != ""){
            joAdat(element)
            ellenorzo = true;
        }else{
            rosszAdat(element)
            ellenorzo = false;
        }

        //price
        element = document.getElementById('ebookprice')as HTMLInputElement;
        if(parseInt(element.value) > -1){
            joAdat(element)
            ellenorzo = true;
        }else{
            rosszAdat(element)
            ellenorzo = false;
        }

        //isbn
        element = document.getElementById('ebookisbn')as HTMLInputElement;
        if(element.value.length == 13){
            joAdat(element)
            ellenorzo = true;
        }else{
            rosszAdat(element)
            ellenorzo = false;
        }

        //weight
        element = document.getElementById('ebooksize')as HTMLInputElement
        if(parseInt(element.value) > 0){
            joAdat(element)
            ellenorzo = true;
        }else{
            rosszAdat(element)
            ellenorzo = false;
        }
    })

    //Papír alapú könyv ellenőrzés és feltöltés
    document.getElementById('paperbutton')?.addEventListener('click', () => {

        //title
        element = document.getElementById('paperbooktitle')as HTMLInputElement;
        if(element.value != ""){
            joAdat(element)
            ellenorzo = true;
        }else{
            rosszAdat(element)
            ellenorzo = false;
        }

        //price
        element = document.getElementById('paperbookprice')as HTMLInputElement;
        if(parseInt(element.value) > -1){
            joAdat(element)
            ellenorzo = true;
        }else{
            rosszAdat(element)
            ellenorzo = false;
        }

        //isbn
        element = document.getElementById('paperbookisbn')as HTMLInputElement;
        if(element.value.length == 13){
            joAdat(element)
            ellenorzo = true;
        }else{
            rosszAdat(element)
            ellenorzo = false;
        }

        //weight
        element = document.getElementById('paperbookweight')as HTMLInputElement
        if(parseInt(element.value) > 0){
            joAdat(element)
            ellenorzo = true;
        }else{
            rosszAdat(element)
            ellenorzo = false;
        }
    })



    //rossz adat esetén piros border
    function rosszAdat (adat : HTMLInputElement){
        adat.style.border = "1px solid red";
    }

    //joadat esetén alapértelmezett border
    function joAdat(adat: HTMLInputElement){
        adat.style.border = "1px solid #ced4da";
    }

});