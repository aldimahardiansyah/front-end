/**
 * Cek dewasa
 */
const age = 12;

// ternary
age > 21 ? console.log("Dewasa") : console.log("Belum");

// menyimpan kondisi ke dalam variable
const status = age > 21 ? "Dewasa" : "Belum";

// ternary 3 kondisi
age > 21 ? console.log("Dewasa") : age > 15 ? console.log("Remaja") : console.log("Balita");