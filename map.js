const names = ["Mikel", "hannah", "Jonas"];

const formattedName = names.map((name) => {
    return `Mr/Mrs ${name}`;
});
console.log(formattedName);