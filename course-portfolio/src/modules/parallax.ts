import parralaxSvg from '../../public/parallax.svg'
import { clamp, getPositionInParent, kalmanFilter } from './helpers';

const container: HTMLElement = document.querySelector('.parallax__container')!;
let ship: SVGElement;
let firstPlane: SVGElement;
let secondPlane: SVGElement;
let isle_right_3rd: SVGElement;
let isle_left_3rd: SVGElement;
let clouds: NodeListOf<SVGElement>;
let sun: SVGElement;
let parallaxImage: HTMLElement;

const K = 0.08
let oldX = 0;

const updateParallax = (clientX: number) => {
    // Center the effect: -50 to +50 range, but constrained
    const rawX = (clientX / container.clientWidth - 0.5) * 100;
    const x = clamp(rawX, -60, 60);

    let newX = kalmanFilter(K, x, oldX)

    ship.style.transform = `translate(${newX * 0.4}px, 0px)`;
    firstPlane.style.transform = `translate(${newX * 0.8}px, 0px) scale(1.03)`;
    secondPlane.style.transform = `translate(${newX * 0.2 - 30}px, 0px)`;
    isle_right_3rd.style.transform = `translate(${newX * 0.1 + 30}px, 0px)`;
    isle_left_3rd.style.transform = `translate(${newX * 0.1 - 30}px, 0px)`;
    sun.style.transform = `translate(${newX * 0.03}px, 0px)`;
    parallaxImage.style.transform = `translate(${rawX * .6 - 30}px, 0px)`;

    oldX = newX
}

const onMouseMove = (event: MouseEvent) => {
    updateParallax(getPositionInParent(event, container).x);
}

const onTouchMove = (event: TouchEvent) => {
    event.preventDefault();
    if (event.touches.length > 0) {
        updateParallax(getPositionInParent(event.touches[0], container).x);
    }
}

export const setupParallax = async () => {
    const response = await fetch(parralaxSvg);
    const svgText = await response.text();
    container.innerHTML = svgText;

    ship = container.querySelector('#SHIP')! as SVGElement;
    firstPlane = container.querySelector('#isle_1st')! as SVGElement;
    secondPlane = container.querySelector('#isle_2nd')! as SVGElement;
    isle_right_3rd = container.querySelector('#isle_right_3rd')! as SVGElement;
    isle_left_3rd = container.querySelector('#isle_left_3rd')! as SVGElement;
    clouds = container.querySelectorAll('#clouds > *') as NodeListOf<SVGElement>;
    sun = container.querySelector('#sun')! as SVGElement;
    parallaxImage = container.querySelector('.parallax__image')! as HTMLElement;


    clouds.forEach(cloud => {
        cloud.classList.add('cloud-animate');
        const duration = 10 + Math.random() * 10;
        const delay = Math.random() * 5;
        const direction = Math.random() > 0.5 ? 'normal' : 'reverse';

        cloud.style.animationDuration = `${duration}s`;
        cloud.style.animationDelay = `${delay}s`;
        cloud.style.animationDirection = direction;
    });

    //установить начальное положение
    const rect = container.getBoundingClientRect();
    updateParallax(rect.left + rect.width / 2);

    container.addEventListener('mousemove', onMouseMove as EventListener);
    container.addEventListener('touchmove', onTouchMove as EventListener, { passive: false });
}
