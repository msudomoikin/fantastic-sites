const map = (array, func) => {

    const result = []

    array.forEach(element => {
        result.push(func(element))
    });

    return result
}

const array = [1, 2, 3, 4, 5, 6]
const square = (n) => n ** 2

console.log(map(array, square))

console.log(map(array, () => 'сетка'))