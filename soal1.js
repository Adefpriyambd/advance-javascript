const prompt = require('prompt-sync')({sigint: true});
const math = require('mathjs');

var angka = prompt("Masukkan sebuah bilangan: ");

if (angka < 0) {
    console.log("Tidak bisa input bilangan negatif");
} else if (angka%2 != 0) {
    console.log("Tidak bisa input bilangan ganjil");
} else {
    akar = math.sqrt(angka);
    console.log("Akar dari "+angka+" = "+akar);
}