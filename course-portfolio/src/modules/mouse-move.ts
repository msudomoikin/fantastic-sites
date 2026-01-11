let mouseMoveContainer = document.querySelector('.mouse-move__container')!;
let dotPermanent: HTMLElement = document.querySelector('.dot--perm')!;

const K = 0.08
let oldX = 0
let oldY = 0

const createDot = (x: number, y: number) => {

    let newX = x * K + oldX * (1 - K)
    let newY = y * K + oldY * (1 - K)

    const dot = document.createElement('div');
    dot.classList.add('dot')

    dot.style.top = `${newY + Math.random() * 20}px`
    dot.style.left = `${newX}px`

    dotPermanent.style.top = `${newY + Math.random() * 20}px`
    dotPermanent.style.left = `${newX}px`
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

const getPosition = (event: MouseEvent | Touch, container: Element): { x: number, y: number } => {
    const rect = container.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

export const trackMouse = () => {
    mouseMoveContainer.addEventListener('mousemove', (event) => {
        const e = event as MouseEvent
        createDot(e.offsetX, e.offsetY)
    })
    
    mouseMoveContainer.addEventListener('touchmove', (event) => {
        const e = event as TouchEvent
        if (e.touches.length > 0) {
            const pos = getPosition(e.touches[0], mouseMoveContainer);
            createDot(pos.x, pos.y)
        }
    }, { passive: true })
}