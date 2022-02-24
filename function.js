/**
 * Membuat fungsi menghitung umur
 */

// function declaration
function hitungUmur(bod) {
    const tahunSekarang = 2022;
    const hasil = tahunSekarang - bod;

    return hasil;
}

// function expression
const hitungUmur2 = function (bod) {
    const tahunSekarang = 2022;
    const hasil = tahunSekarang - bod;

    return hasil;
}

// arrow function
const hitungUmur3 = bod => {
    const tahunSekarang = 2022;
    const hasil = tahunSekarang - bod;

    return hasil;
}

console.log(hitungUmur3(2002));