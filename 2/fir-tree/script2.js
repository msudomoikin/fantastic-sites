

let maxHeight = 9

createTreeSegment(1, '*', 9)
createTreeSegment(3, '^', 9)
createTreeSegment(5, '^', 9)
createTreeSegment(9, '^', 9)


function createTreeSegment(height, symbol = '^', maxHeight) {


    for (let index = 0; index < height; index++) {
        let segment = '';
        let canHangToy = false;

        segment += '/'.repeat(maxHeight - index - 1)

        let symbolCount = 1 + index * 2;

        symbolCount > 2 ? canHangToy = true : canHangToy = false;

        for (let j = 0; j < symbolCount; j++) {
            const randomNum = getRandomInt(symbolCount)
            if (randomNum === index && canHangToy) {
                segment += '0';
                canHangToy = false;
            } else {
                segment += symbol;
            }
        }

        segment += '\\'.repeat(maxHeight - index - 1);

        console.log(segment);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}