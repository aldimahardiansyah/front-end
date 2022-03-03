const sum = (...numbers) => {
    let result = 0;

    for (let number of numbers) {
        result += number;
    }

    console.log(result);
}

sum(1, 2);