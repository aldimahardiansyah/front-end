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

const hasil = users.filter((user) => {
    return user.age > 20;
});

console.log(hasil);