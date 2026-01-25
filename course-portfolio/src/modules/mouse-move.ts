import { getPositionInParent, kalmanFilter } from "./helpers";

let mouseMoveContainer = document.querySelector('.mouse-move__container')!;
let permanentDot: HTMLElement = document.querySelector('.dot--permanent')!;

const K = 0.08
let oldX: number
let oldY: number

const createDot = (x: number, y: number) => {

    let newX = kalmanFilter(K, x, oldX)
    let newY = kalmanFilter(K, y, oldY)

    const dot = document.createElement('div');
    dot.classList.add('dot')

    dot.style.top = `${newY + Math.random() * 20}px`
    dot.style.left = `${newX}px`

    permanentDot.style.top = `${newY + Math.random() * 20}px`
    permanentDot.style.left = `${newX}px`
    mouseMoveContainer.append(dot)

    setTimeout(() => {
        dot.classList.add('remove')
    }, 10)

    setTimeout(() => {
        dot.remove()
    }, 800)

    oldX = newX
    oldY = newY
}



export const trackMouse = () => {

    //setup init dot position
    const dotRect = permanentDot.getBoundingClientRect()
    const parentRect = permanentDot.parentElement!.getBoundingClientRect()
    const dotInitCoords = { y: parentRect.height / 2 - dotRect.height / 2, x: parentRect.width / 2 - dotRect.width / 2 }
    permanentDot.style.top = `${dotInitCoords.y}px`;
    permanentDot.style.left = `${dotInitCoords.x}px`;
    oldY = dotInitCoords.y
    oldX = dotInitCoords.x

    mouseMoveContainer.addEventListener('mousemove', (event) => {
        const e = event as MouseEvent
        createDot(e.offsetX, e.offsetY)
    })

    mouseMoveContainer.addEventListener('touchmove', (event) => {
        const e = event as TouchEvent
        e.preventDefault();
        if (e.touches.length > 0) {
            const pos = getPositionInParent(e.touches[0], mouseMoveContainer);
            createDot(pos.x, pos.y)
        }
    }, { passive: false })
}