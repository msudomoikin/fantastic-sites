let colorTemplate
let rotateMultiplayer = 4

createGrid()

function createGrid() {

    let wrapper = document.querySelector('#rectangles-wrapper')
    wrapper.innerHTML = ''
    for (let i = 0; i < 255; i = i + 1) {
        // createElement
        let newElement = document.createElement('div')
        newElement.classList.add('rectangle')
        newElement.style.width = `${i * 2 }px`

        newElement.style.transform = `rotate3d(1, 1, 1, ${i * rotateMultiplayer}deg)`
        // innerText    
        const text = document.createElement('span')
        text.classList.add('rectangle__text');
        text.textContent = i
        newElement.append(text)


        if (colorTemplate === 'r') newElement.style.backgroundColor = `rgb(255,${i},${100 - i})`;
        if (colorTemplate === 'g') newElement.style.backgroundColor = `rgb(${i},255,100)`
        if (colorTemplate === 'b') newElement.style.backgroundColor = `rgb(255,100,${i})`;

        // append
        wrapper.append(newElement)
    }

}

// addEventListener
document.addEventListener('click', function () {
    const color = ['r', 'g', 'b']
    const randomColor = color[getRandomInt(3)]
    rotateMultiplayer = getRandomInt(100);
    console.log(randomColor, rotateMultiplayer);

    colorTemplate = randomColor
    createGrid();
    // document.querySelectorAll('.rectangle').forEach(rect => rect.classList.add('rotate-anim'));

})  



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}