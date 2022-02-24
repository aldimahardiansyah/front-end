// membuat object
const user = {
    nama: "Aldi",
    age: 19,
    major: "Informatics"
};

// mengakses nilai object
console.log(user.age);

// for in
for (const key in user) {
    console.log(user[key]);
}