"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let konyvek = [];
let ellenorzo = false;
let element;
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
        element = document.getElementById('ebooktitle');
        if (element.value != "") {
            joAdat(element);
            ellenorzo = true;
        }
        else {
            rosszAdat(element);
            ellenorzo = false;
        }
        //price
        element = document.getElementById('ebookprice');
        if (parseInt(element.value) > -1) {
            joAdat(element);
            ellenorzo = true;
        }
        else {
            rosszAdat(element);
            ellenorzo = false;
        }
        //isbn
        element = document.getElementById('ebookisbn');
        if (element.value.length == 13) {
            joAdat(element);
            ellenorzo = true;
        }
        else {
            rosszAdat(element);
            ellenorzo = false;
        }
        //weight
        element = document.getElementById('ebooksize');
        if (parseInt(element.value) > 0) {
            joAdat(element);
            ellenorzo = true;
        }
        else {
            rosszAdat(element);
            ellenorzo = false;
        }
    });
    //Papír alapú könyv ellenőrzés és feltöltés
    (_c = document.getElementById('paperbutton')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
        //title
        element = document.getElementById('paperbooktitle');
        if (element.value != "") {
            joAdat(element);
            ellenorzo = true;
        }
        else {
            rosszAdat(element);
            ellenorzo = false;
        }
        //price
        element = document.getElementById('paperbookprice');
        if (parseInt(element.value) > -1) {
            joAdat(element);
            ellenorzo = true;
        }
        else {
            rosszAdat(element);
            ellenorzo = false;
        }
        //isbn
        element = document.getElementById('paperbookisbn');
        if (element.value.length == 13) {
            joAdat(element);
            ellenorzo = true;
        }
        else {
            rosszAdat(element);
            ellenorzo = false;
        }
        //weight
        element = document.getElementById('paperbookweight');
        if (parseInt(element.value) > 0) {
            joAdat(element);
            ellenorzo = true;
        }
        else {
            rosszAdat(element);
            ellenorzo = false;
        }
    });
    //rossz adat esetén piros border
    function rosszAdat(adat) {
        adat.style.border = "1px solid red";
    }
    //joadat esetén alapértelmezett border
    function joAdat(adat) {
        adat.style.border = "1px solid #ced4da";
    }
});
