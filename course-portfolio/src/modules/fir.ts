import { getRandomInt } from "./helpers";

const container = document.querySelector('.fir__container')!;
const reloadBtn = document.querySelector('.fir__reload')!;

container.addEventListener('click', () => {
    createTree()
})

reloadBtn.addEventListener('click', () => {
    createTree()
})

export function createTree() {
    const treeHeight = 9

    container.textContent += createTreeSegment(1, '*', '', treeHeight)
    container.textContent += createTreeSegment(3, '^', '❂', treeHeight)
    container.textContent += createTreeSegment(5, '^', '⚉', treeHeight)
    container.textContent += createTreeSegment(9, '^', '◍', treeHeight)
}


function createTreeSegment(height: number, treeSymbol = '^', toy = 'o', treeHeight: number) {
    let segment = '';

    for (let index = 0; index < height; index++) {
        let canHangToy = false;

        segment += ' '.repeat(treeHeight - index - 1) + '\n'

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
    }
    return segment
}
