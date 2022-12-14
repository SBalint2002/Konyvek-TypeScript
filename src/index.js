"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PaperBook_1 = require("./PaperBook");
const Ebook_1 = require("./Ebook");
let isbnPattern = /^[0-9]{13}$/;
let konyvek = [];
document.addEventListener("DOMContentLoaded", () => {
    var _a, _b, _c;
    document.getElementById("paperbook").style.display = "none";
    (_a = document.getElementById("valasztas")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        if (document.getElementById('ebookradio').checked) {
            document.getElementById("paperbook").style.display = "none";
            document.getElementById("ebook").style.display = "block";
        }
        else if (document.getElementById('paperbookradio').checked) {
            document.getElementById("ebook").style.display = "none";
            document.getElementById("paperbook").style.display = "block";
        }
    });
    //Ebook könyv ellenőrzés és feltöltés
    (_b = document.getElementById('ebookbutton')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
        //title
        let jocim = false;
        let cim = document.getElementById('ebooktitle');
        if (cim.value != "") {
            joAdat(cim);
            jocim = true;
        }
        else {
            rosszAdat(cim);
            jocim = false;
        }
        //price
        let joar = false;
        let ar = document.getElementById('ebookprice');
        if (parseInt(ar.value) > -1) {
            joAdat(ar);
            joar = true;
        }
        else {
            rosszAdat(ar);
            joar = false;
        }
        //isbn
        let joazonosito = false;
        let azonosito = document.getElementById('ebookisbn');
        if (isbnPattern.test(azonosito.value)) {
            joAdat(azonosito);
            joazonosito = true;
        }
        else {
            rosszAdat(azonosito);
            joazonosito = false;
        }
        //size
        let jomeret = false;
        let size = document.getElementById('ebooksize');
        if (parseInt(size.value) > 0) {
            joAdat(size);
            jomeret = true;
        }
        else {
            rosszAdat(size);
            jomeret = false;
        }
        if (jocim && joar && joazonosito && jomeret) {
            console.log("sikeres ebook");
            konyvek.push(new Ebook_1.Ebook(cim.value, parseInt(ar.value), azonosito.value, parseInt(size.value)));
            cim.value = "";
            ar.value = "";
            azonosito.value = "";
            size.value = "";
            document.getElementById('konyvszam').textContent = String(konyvek.length);
            let ingyen = 0;
            for (let i = 0; i < konyvek.length; i++) {
                if (konyvek[i].price == 0) {
                    ingyen++;
                }
            }
            document.getElementById('ingyenkonyvszam').textContent = String(ingyen);
            let osszar = 0;
            for (let i = 0; i < konyvek.length; i++) {
                osszar += konyvek[i].price;
            }
            document.getElementById('konyvar').textContent = String(osszar);
        }
    });
    //Papír alapú könyv ellenőrzés és feltöltés
    (_c = document.getElementById('paperbutton')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
        //title
        let jocim = false;
        let cim = document.getElementById('paperbooktitle');
        if (cim.value != "") {
            joAdat(cim);
            jocim = true;
        }
        else {
            rosszAdat(cim);
            jocim = false;
        }
        //price
        let joar = false;
        let ar = document.getElementById('paperbookprice');
        if (parseInt(ar.value) > -1) {
            joAdat(ar);
            joar = true;
        }
        else {
            rosszAdat(ar);
            joar = false;
        }
        //isbn
        let joazonosito = false;
        let azonosito = document.getElementById('paperbookisbn');
        if (isbnPattern.test(azonosito.value)) {
            joAdat(azonosito);
            joazonosito = true;
        }
        else {
            rosszAdat(azonosito);
            joazonosito = false;
        }
        //weight
        let josuly = false;
        let suly = document.getElementById('paperbookweight');
        if (parseInt(suly.value) > 0) {
            joAdat(suly);
            josuly = true;
        }
        else {
            rosszAdat(suly);
            josuly = false;
        }
        if (jocim && joar && joazonosito && josuly) {
            console.log("sikeres paper");
            konyvek.push(new PaperBook_1.PaperBook(cim.value, parseInt(ar.value), azonosito.value, parseInt(suly.value)));
            cim.value = "";
            ar.value = "";
            azonosito.value = "";
            suly.value = "";
            document.getElementById('konyvszam').textContent = String(konyvek.length);
            let ingyen = 0;
            for (let i = 0; i < konyvek.length; i++) {
                if (konyvek[i].price == 0) {
                    ingyen++;
                }
            }
            document.getElementById('ingyenkonyvszam').textContent = String(ingyen);
            let osszar = 0;
            for (let i = 0; i < konyvek.length; i++) {
                osszar += konyvek[i].price;
            }
            document.getElementById('konyvar').textContent = String(osszar);
        }
    });
    //rossz adat esetén piros border + ellenorzo
    function rosszAdat(adat) {
        adat.style.border = "1px solid red";
    }
    //joadat esetén alapértelmezett border + ellenorzo
    function joAdat(adat) {
        adat.style.border = "1px solid #ced4da";
    }
});
