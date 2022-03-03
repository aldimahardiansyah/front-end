/**
 * download: 3 detik
 * verify: 2 detik
 * notify: menampilkan hasil
 */
function download() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Proses download 3 detik");
        }, 3000);
    });
}

function verify() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("proses download 2 detik");
        }, 2000);
    });
}

function notify() {
    console.log("Selesai download!");
}

function main() {
    download()
        .then(function (hasil) {
            console.log(hasil);
            return verify();
        })
        .then(function (hasil) {
            console.log(hasil);
            return notify()
        })
}

main();