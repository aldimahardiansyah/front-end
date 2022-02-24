// membuat array
const animals = ['dog', 'cat', 'bird', 'fish'];

// menampilkan array
console.log(animals[0]);

// menampilkan seluruh array
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

// for of
for (const animal of animals) {
    console.log(animal);
}