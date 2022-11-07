import { PaperBook } from "./PaperBook";
import { Ebook } from "./Ebook";

let isbnPattern = /^[0-9]{13}$/;

export interface Book {
    title : string;
    price : number;
    isbn : string;

    kiir() : void;
    toString() : string;
}

let konyvek: Book[] = [];
let ellenorzo = false;


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
        ellenorzo = false;

        //title
        let cim : HTMLInputElement = document.getElementById('ebooktitle')as HTMLInputElement;
        if(cim.value != ""){
            joAdat(cim)
        }else rosszAdat(cim)

        //price
        let ar : HTMLInputElement = document.getElementById('ebookprice')as HTMLInputElement;
        if(parseInt(ar.value) > -1){
            joAdat(ar)
        }else rosszAdat(ar)

        //isbn
        let joazonosito = false;
        let azonosito : HTMLInputElement = document.getElementById('ebookisbn')as HTMLInputElement;
        if(isbnPattern.test(azonosito.value)){
            joAdat(azonosito)
            joazonosito = true;
        }else{
            rosszAdat(azonosito)
            joazonosito = false;
        }

        //size
        let size : HTMLInputElement = document.getElementById('ebooksize')as HTMLInputElement
        if(parseInt(size.value) > 0){
            joAdat(size)
        }else rosszAdat(size)

        if(ellenorzo && joazonosito){
            console.log("sikeres ebook");
            konyvek.push(new Ebook(cim.value,parseInt(ar.value), azonosito.value, parseInt(size.value)));
            cim.value = "";
            ar.value = "";
            azonosito.value = "";
            size.value = "";

            (document.getElementById('konyvszam') as HTMLElement).textContent = String(konyvek.length);
            let ingyen = 0;
            for(let i = 0; i < konyvek.length; i++){
                if(konyvek[i].price == 0){
                    ingyen++;
                }
            }
            (document.getElementById('ingyenkonyvszam') as HTMLElement).textContent = String(ingyen);
            let osszar = 0;
            for(let i = 0; i < konyvek.length; i++){
                osszar += konyvek[i].price;
            }
            (document.getElementById('konyvar') as HTMLElement).textContent = String(osszar);
        }
    })

    //Papír alapú könyv ellenőrzés és feltöltés
    document.getElementById('paperbutton')?.addEventListener('click', () => {
        ellenorzo = false;

        //title
        let cim : HTMLInputElement = document.getElementById('paperbooktitle')as HTMLInputElement;
        if(cim.value != ""){
            joAdat(cim)
        }else rosszAdat(cim)

        //price
        let ar : HTMLInputElement = document.getElementById('paperbookprice')as HTMLInputElement;
        if(parseInt(ar.value) > -1){
            joAdat(ar)
        }else rosszAdat(ar)

        //isbn
        let joazonosito = false;
        let azonosito : HTMLInputElement = document.getElementById('paperbookisbn')as HTMLInputElement;
        if(isbnPattern.test(azonosito.value)){
            joAdat(azonosito)
            joazonosito = true;
        }else{
            rosszAdat(azonosito)
            joazonosito = false;
        }

        //weight
        let suly : HTMLInputElement = document.getElementById('paperbookweight')as HTMLInputElement
        if(parseInt(suly.value) > 0){
            joAdat(suly)
        }else rosszAdat(suly)

        if(ellenorzo){
            console.log("sikeres paper");
            konyvek.push(new PaperBook(cim.value,parseInt(ar.value), azonosito.value, parseInt(suly.value)));
            cim.value = "";
            ar.value = "";
            azonosito.value = "";
            suly.value = "";

            (document.getElementById('konyvszam') as HTMLElement).textContent = String(konyvek.length);
            let ingyen = 0;
            for(let i = 0; i < konyvek.length; i++){
                if(konyvek[i].price == 0){
                    ingyen++;
                }
            }
            (document.getElementById('ingyenkonyvszam') as HTMLElement).textContent = String(ingyen);
            let osszar = 0;
            for(let i = 0; i < konyvek.length; i++){
                osszar += konyvek[i].price;
            }
            (document.getElementById('konyvar') as HTMLElement).textContent = String(osszar);
        }
    })



    //rossz adat esetén piros border + ellenorzo
    function rosszAdat (adat : HTMLInputElement){
        adat.style.border = "1px solid red";
        ellenorzo = false;
    }

    //joadat esetén alapértelmezett border + ellenorzo
    function joAdat(adat: HTMLInputElement){
        adat.style.border = "1px solid #ced4da";
        ellenorzo = true;
    }

});