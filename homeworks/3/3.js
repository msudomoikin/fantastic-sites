let orderItem = {
    // Информация о самом продукте (артикуле)
    product: {
        name: 'Арахисовая паста',
        price: 299,
    },
    // Количество
    quantity: 2,
}

function printItem(item) {

    const string = `${item.product.name}...............${item.product.price} * ${item.quantity} = ${item.product.price * item.quantity} руб.`
    console.log(string);
}


printItem(orderItem)