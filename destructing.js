/**
 * Membuat object of object
 */
const req = {
    body: {
        name: "Aldi",
        age: 19,
        major: "Informatics"
    },
};

// melakukan destructing

const {
    name,
    age,
    major
} = req.body;

// Destructing array
const family = ["Mikel", "Hannah", "Jonas"];

const [husband, wife, son] = family;

console.log(husband);