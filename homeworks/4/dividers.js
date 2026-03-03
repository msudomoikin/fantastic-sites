const dividers = (digit) => {

    const result = []

    if (digit <= 0) {
        return result
    }

    if (!Number.isInteger(digit)) {
        return result
    }

    range(digit).forEach(number => {
        if ((digit % number) === 0) {
            result.push(number)
        }
    })

    return result

}

const range = (number) => {
    return [...Array(number + 1).keys()];
}

console.log(dividers(12));
console.log(dividers(2));
console.log(dividers(0));

