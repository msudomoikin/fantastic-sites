const pointer: HTMLElement = document.querySelector('.xray__pointer')!;
const xrayContainer = document.querySelector('.xray__container')!;
const ufo: HTMLElement = document.querySelector('.xray__background-ufo')!;

export const setupXray = () => {
    trackXray();
    placeUfo();
}

const updatePointerPosition = (clientX: number, clientY: number) => {
    const rect = xrayContainer.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const offsetY = clientY - rect.top;
    
    pointer.style.left = `${offsetX}px`
    pointer.style.top = `${offsetY}px`
}

const trackXray = () => {
    xrayContainer.addEventListener('mousemove', (event) => {
        const e = event as MouseEvent
        updatePointerPosition(e.clientX, e.clientY)
    })
    
    xrayContainer.addEventListener('touchmove', (event) => {
        const e = event as TouchEvent
        if (e.touches.length > 0) {
            updatePointerPosition(e.touches[0].clientX, e.touches[0].clientY)
        }
    }, { passive: true })
}

const placeUfo = () => {
    ufo.style.top = `${Math.random() * 80}%`
    ufo.style.left = `${Math.random() * 80}%`
}