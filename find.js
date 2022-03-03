const users = [{
        name: "Aldi",
        age: 19
    },
    {
        name: "Hannah",
        age: 34
    },
    {
        name: "Jonnas",
        age: 25
    },
]

const hasil = users.find((user) => {
    return user.age > 18;
});

console.log(hasil);