import { getPosition } from "./helpers";

const container: HTMLElement = document.querySelector('.magnetic-lines__container')!;
let lines: NodeListOf<HTMLElement>;

const onMove = (x: number, y: number) => {
    for (const line of lines) {
        const l = line.getBoundingClientRect();
        const lineX = l.left + l.width / 2;
        const lineY = l.top + l.height / 2;

        let angle = Math.atan2(y - lineY, x - lineX) + Math.PI / 2;

        line.style.transform = `rotateZ(${angle}rad)`;
        line.style.filter = `hue-rotate(${angle}rad)`;
    }
};

const onMouseMove = (event: MouseEvent) => {
    onMove(event.clientX, event.clientY);
};

const onTouchMove = (event: TouchEvent) => {
    event.preventDefault();
    if (event.touches.length > 0) {
        const touch = event.touches[0];
        // Используем getPosition для получения координат относительно контейнера
        const pos = getPosition(touch, container);
        onMove(pos.x + container.getBoundingClientRect().left, pos.y + container.getBoundingClientRect().top);
    }
};

const reset = () => {
    for (const line of lines) {
        setTimeout(() => {
            line.style.transition = '';
        }, 580);
        setTimeout(() => {
            line.style.transition = 'transform 0.5s ease, filter 0.5s ease';
            line.style.transform = `rotate(0rad)`;
            line.style.filter = `hue-rotate(0rad)`;
        }, 500);
    }
};

export const setupLines = () => {
    const containerWidth = container.clientWidth; // Получаем текущую ширину контейнера
    const lineWidth = 1; // Ширина одной линии в px
    const gap = 5;       // Отступ между линиями в px
    let maxLines = Math.floor((containerWidth + gap) / (lineWidth + gap));
    maxLines = Math.min(maxLines, 80); // Не больше 80, как раньше

    for (let i = 0; i < maxLines; i++) {
        const line = document.createElement('div');
        line.classList.add('line');
        container.appendChild(line);
    }

    lines = document.querySelectorAll('.line');

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('touchmove', onTouchMove);
    container.addEventListener('mouseleave', reset);
    container.addEventListener('touchend', reset);