const pointer: HTMLElement = document.querySelector('.xray__pointer')!;
const xrayContainer = document.querySelector('.xray__container')!;
const ufo: HTMLElement = document.querySelector('.xray__background-ufo')!;

export const setupXray = () => {
    trackXray();
    placeUfo();
}

const trackXray = () => {
    xrayContainer.addEventListener('mousemove', (event) => {
        const e = event as MouseEvent
        pointer.style.left = `${e.offsetX}px`
        pointer.style.top = `${e.offsetY}px`
    })
}

const placeUfo = () => {
    ufo.style.top = `${Math.random() * 80}%`
    ufo.style.left = `${Math.random() * 80}%`
}