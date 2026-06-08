let PRICE = 0
const TARIFF = 6.43

const calculatePrice = (consumption) => {
    PRICE = TARIFF * consumption
}

calculatePrice(5.34)
console.log(PRICE);