let colorTemplate = 'r'
let rotateMultiplayer = 4
const color = ['r', 'g', 'b']

createGrid()

function createGrid() {

    let wrapper = document.querySelector('#rectangles-wrapper')
    wrapper.innerHTML = ''
    for (let i = 0; i < 255; i = i + 1) {
        // createElement
        let newElement = document.createElement('div')
        newElement.classList.add('rectangle')
        newElement.style.width = `${i * 2}px`
        // innerText    
        const text = document.createElement('span')
        text.classList.add('rectangle__text');
        text.textContent = i
        newElement.append(text)

        colorize(newElement, i)


        // append
        wrapper.append(newElement)
    }
}

function colorize(element, i) {
    if (colorTemplate === 'r') element.style.backgroundColor = `rgb(255,${i},${100 - i})`;
    if (colorTemplate === 'g') element.style.backgroundColor = `rgb(${i},255,100)`
    if (colorTemplate === 'b') element.style.backgroundColor = `rgb(255,100,${i})`;
}

// addEventListener
document.addEventListener('click', randomize)


function randomize() {
    rotateMultiplayer = getRandomInt(100);

    colorTemplate = color[getRandomInt(3)]
    console.log(colorTemplate, rotateMultiplayer);

    document.querySelectorAll('.rectangle').forEach((rect, index) => {
        colorize(rect, index)
        rect.style.transform = `rotate3d(0, 0, 1, ${rotateMultiplayer * index}deg)`
    });

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}