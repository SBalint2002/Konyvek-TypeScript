"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let konyvek = [];
document.addEventListener("DOMContentLoaded", () => {
    var _a;
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
});
