const prompt = require('prompt-sync')({sigint: true});
const dataApi = require('../Advance JavaScript/responApi.js');

const lenData = dataApi.productBin.data.length; //variabel buat manggil panjang datanya
const productCode = prompt("Silahkan masukkan Product Code: ");
let quantity = 0;

// Masukkan contoh product Code berikut 'FBR00040101' untuk mengetahui total quantity product.
for (let i = 0; i < lenData; i++) {
  if (productCode == dataApi.productBin.data[i].productCode) {
    let qty = dataApi.productBin.data[i].quantity;
    quantity = quantity + qty;
  }
}

if (quantity != 0) {
  console.log("Quantity untuk product dengan code "+productCode+" adalah sebanyak "+quantity+" buah");
} else {
  console.log("Product code tidak ditemukan!");
}