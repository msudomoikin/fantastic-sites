let colorTemplate
let rotateMultiplayer = 1

function createGrid() {

    let wrapper = document.querySelector('#rectangles-wrapper')
    wrapper.innerHTML = ''
    for (let i = 0; i < 255; i = i + 1) {
        // createElement
        let newElement = document.createElement('div')
        newElement.classList.add('rectangle')
        newElement.style.width = `${i * 2.2}px`

        
        newElement.style.transform = `rotate3d(0, 1, 1, ${i * rotateMultiplayer}deg) skew(${-i * rotateMultiplayer}deg)`
        // newElement.classList.add('rotate-anim')
        
        // innerText
        const text = document.createElement('span')
        text.classList.add('rectangle__text');
        text.textContent = i
        newElement.append(text)
        

        if (colorTemplate === 'r') newElement.style.backgroundColor = `rgb(255,${i},100)`;
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
    console.log(randomColor);

    colorTemplate = randomColor
    createGrid();
})



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}