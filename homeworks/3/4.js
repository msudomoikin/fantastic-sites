
// order — список покупок
let order = [
    // каждый объект — один товар
    {
        product: {
            name: 'Арахисовая паста кранчи',
            price: 299,
        },
        quantity: 2,
    },

    {
        product: {
            name: 'Драгонфрут',
            price: 160,
        },
        quantity: 0.406,
    },

    {
        product: {
            name: 'Манго',
            price: 105,
        },
        quantity: 0.789,
    },

    {
        product: {
            name: 'Голландские вафли',
            price: 21,
        },
        quantity: 6,
    },
]


let sum = 0

order.forEach(item => {
    sum += item.product.price * item.quantity
    printItem(item)
})

printSum(sum)

function printItem(item) {
    const string = `\n${item.product.name}\n${item.product.price} * ${item.quantity} = ${formatSum(item.product.price, item.quantity)}`
    console.log(string);
}

function formatSum(price, quantity) {
    const amount = price * quantity
    return amount.toLocaleString("ru-RU", {
        style: "currency",
        currency: "RUB",
    })
}

function printSum(sum) {
    console.log('\n----------------------------------')

    console.log(`Итого: ${formatSum(sum, 1)}\n`)

}