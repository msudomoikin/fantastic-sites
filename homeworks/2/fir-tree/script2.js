createTree();

function createTree() {
    const treeHeight = 9
    createTreeSegment(1, '*', '', treeHeight)
    createTreeSegment(3, '^', '❂', treeHeight)
    createTreeSegment(5, '^', '⚉', treeHeight)
    createTreeSegment(9, '^', '◍', treeHeight)
}


function createTreeSegment(height, treeSymbol = '^', toy = 'o', treeHeight) {
    for (let index = 0; index < height; index++) {
        let segment = '';
        let canHangToy = false;

        segment += ' '.repeat(treeHeight - index - 1)

        let symbolCount = 1 + index * 2;

        symbolCount > 3 ? canHangToy = true : canHangToy = false;

        for (let j = 0; j < symbolCount; j++) {
            const randomNum = getRandomInt(symbolCount)
            if (randomNum === index && canHangToy) {
                segment += toy;
                canHangToy = false; // lets add only one toy
            } else {
                segment += treeSymbol;
            }
        }
        console.log(segment);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}