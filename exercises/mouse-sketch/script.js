let mouseSketch = document.querySelector('.mouse-sketch');

mouseSketch.addEventListener('mousemove', (e) => {
    createDot(e.x, e.y)
})

const K = 0.1
let oldX = 0
let oldY = 0

const createDot = (x, y) => {

    let newX = x * K + oldX * (1 - K)
    let newY = y * K + oldY * (1 - K)

    const dot = document.createElement('div');

    dot.classList.add('dot')
    dot.style.top = `${newY + Math.random() * 20}px`
    dot.style.left = `${newX}px`



    mouseSketch.append(dot)

    setTimeout(() => {
        dot.classList.add('remove')
    }, 10)

    setTimeout(() => {
        dot.remove()
    }, 800)

    oldX = newX
    oldY = newY
}