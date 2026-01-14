import { getRandomInt } from "./helpers"

let colorTemplate = 'r'
let rotateMultiplayer = 5
const color = ['r', 'g', 'b']

let container = document.querySelector('.break-dom__container')!
const reloadBtn = document.querySelector('.break-dom__reload')!;

container.addEventListener('click', randomize)
reloadBtn.addEventListener('click', randomize)

export function createGrid() {
    container.innerHTML = ''
    for (let i = 0; i < 110; i = i + 1) {
        let newElement = document.createElement('div')
        newElement.classList.add('break-dom__rectangle')
        newElement.style.width = `${i * 1.5}px`

        const text = document.createElement('span')
        text.classList.add('break-dom__rectangle-text');
        text.textContent = String(i)
        newElement.append(text)

        colorize(newElement, i)
        container.append(newElement)
    }
}

function colorize(element: HTMLElement, i: number) {
    if (colorTemplate === 'r') element.style.backgroundColor = `rgb(255,${i},${100 - i})`;
    if (colorTemplate === 'g') element.style.backgroundColor = `rgb(${i},255,100)`
    if (colorTemplate === 'b') element.style.backgroundColor = `rgb(255,100,${i})`;
}

function randomize() {
    rotateMultiplayer = getRandomInt(100);

    colorTemplate = color[getRandomInt(3)]

    document.querySelectorAll('.break-dom__rectangle').forEach((rect, index) => {
        const rectElement = rect as HTMLElement
        colorize(rectElement, index)
        rectElement.style.transform = `rotate3d(0, 0, 1, ${rotateMultiplayer * index}deg)`
    });

}

createGrid()