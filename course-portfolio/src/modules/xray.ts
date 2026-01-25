import { getElementCenter, getPositionInParent } from "./helpers";

const pointer: HTMLElement = document.querySelector('.xray__pointer')!;
const xrayContainer: HTMLElement = document.querySelector('.xray__container')!;
const ufo: HTMLElement = document.querySelector('.xray__background-ufo')!;
let ufoCenter = { x: 0, y: 0 };
let ufoFound = false
type CoordObj = { x: number, y: number };

export const setupXray = () => {
    trackXray();
    placeUfo();
}

const updatePointerPosition = (coordsObj: CoordObj) => {

    pointer.style.left = `${coordsObj.x}px`
    pointer.style.top = `${coordsObj.y}px`


    if (!ufoFound && Math.abs(ufoCenter.x - coordsObj.x) < 70 && Math.abs(ufoCenter.y - coordsObj.y) < 70) {
        ufoFound = true;
        placeUfo();
    }
}

const trackXray = () => {
    xrayContainer.addEventListener('mousemove', (event) => {
        const e = event as MouseEvent
        updatePointerPosition(getPositionInParent(e, xrayContainer))
    })



    xrayContainer.addEventListener('touchmove', (event) => {
        const e = event as TouchEvent
        e.preventDefault();
        if (e.touches.length > 0) {
            updatePointerPosition(getPositionInParent(e.touches[0], xrayContainer))
        }
    }, { passive: false })
}

const placeUfo = () => {
    ufoFound = true;
    ufo.style.top = `${Math.random() * 50}%`
    ufo.style.left = `${Math.random() * 70}%`

    setTimeout(() => {
        ufoCenter = getElementCenter(ufo, xrayContainer);
        ufoFound = false;
    }, 1000);

}