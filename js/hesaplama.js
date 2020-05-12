var sayi1;
var islem;
var tiklama = document.getElementById("cikti");

function button(num) {
    var basilanSayi = Number(num);
    var sayi = document.createTextNode(basilanSayi);
    tiklama.appendChild(sayi);
}
function temizle() { // çıktı temizlenecek
    tiklama.textContent = "";
}
function bolme() { // bölme işlemi komutu
    sayi1 = Number(tiklama.textContent);
    islem = "bolme";
    tiklama.textContent = "";
}
function carpma() { // çarpma işlemi komutu
    sayi1 = Number(tiklama.textContent);
    islem = "carpma";
    tiklama.textContent = "";
}
function cikarma() { // çıkarma işlemi komutu
    sayi1 = Number(tiklama.textContent);
    islem = "cikarma";
    tiklama.textContent = "";
}
function toplama() { // toplama işlemi komutu
    sayi1 = Number(tiklama.textContent);
    islem = "toplama";
    tiklama.textContent = "";
}
function ondalik() { // ondalık alınacak
    var sayi = document.createTextNode(".");
    tiklama.appendChild(sayi);
}

function esittir() { // sonuc fonksiyonu ( tüm işlemler için)
    var sonuc;
    var num2 = Number(tiklama.textContent);
    switch (islem) {
    case "bolme":
        sonuc = sayi1 / num2;
        tiklama.textContent = sonuc;
        break;
    case "carpma":
        sonuc = sayi1 * num2;
        tiklama.textContent = sonuc;
        break;
    case "cikarma":
        sonuc = sayi1 - num2;
        tiklama.textContent = sonuc;
        break;
    case "toplama":
        sonuc = sayi1 + num2;
        tiklama.textContent = sonuc;
        break;
    default:
        tiklama.textContent = "Hatalı işlem...";
    }
}

document.getElementById("bir").onclick = function () { button(1);};
document.getElementById("iki").onclick = function () { button(2);};
document.getElementById("uc").onclick = function () { button(3);};
document.getElementById("dort").onclick = function () { button(4);};
document.getElementById("bes").onclick = function () { button(5);};
document.getElementById("alti").onclick = function () { button(6);};
document.getElementById("yedi").onclick = function () { button(7);};
document.getElementById("sekiz").onclick = function () { button(8);};
document.getElementById("dokuz").onclick = function () { button(9);};
document.getElementById("sifir").onclick = function () { button(0);};
document.getElementById("temizle").onclick = function () { temizle();};
document.getElementById("bolme").onclick = function () { bolme();};
document.getElementById("carpma").onclick = function () { carpma();};
document.getElementById("cikarma").onclick = function () { cikarma();};
document.getElementById("toplama").onclick = function () { toplama();};
document.getElementById("esittir").onclick = function () { esittir();};
document.getElementById("ondalik").onclick = function () { ondalik();};
