const filter = (array, func) => {
    const result = []

    array.forEach(element => {
        if (func(element)) result.push(element)
    });

    return result
}

const array = [...Array(12).keys()]
const oddArray = [1, 3, 5]

const isEven = (n) => {
    return n % 2 === 0
}

console.log(filter(oddArray, isEven))