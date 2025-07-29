

createTree();

function createTree() {
    const maxHeight = 9
    createTreeSegment(1, '*', maxHeight)
    createTreeSegment(3, '^', maxHeight)
    createTreeSegment(5, '^', maxHeight)
    createTreeSegment(9, '^', maxHeight)
}


function createTreeSegment(height, symbol = '^', maxHeight) {
    for (let index = 0; index < height; index++) {
        let segment = '';
        let canHangToy = false;

        segment += ' '.repeat(maxHeight - index - 1)

        let symbolCount = 1 + index * 2;

        symbolCount > 3 ? canHangToy = true : canHangToy = false;

        for (let j = 0; j < symbolCount; j++) {
            const randomNum = getRandomInt(symbolCount)
            if (randomNum === index && canHangToy) {
                segment += 'o';
                canHangToy = false; // only one toy
            } else {
                segment += symbol;
            }
        }

        // segment += '\\'.repeat(maxHeight - index - 1);

        console.log(segment);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}