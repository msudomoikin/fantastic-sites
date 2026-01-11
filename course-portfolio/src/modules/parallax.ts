import asset from '../../public/SVG/Asset 3.svg'

const container: HTMLElement = document.querySelector('.parallax__container')!;
let ship: SVGElement;
let firstPlane: SVGElement;
let secondPlane: SVGElement;
let isle_right_3rd: SVGElement;
let isle_left_3rd: SVGElement;
let clouds: NodeListOf<SVGElement>;
let sun: SVGElement;

const clamp = (value: number, min: number, max: number): number => {
    return Math.max(min, Math.min(max, value));
}

const updateParallax = (clientX: number) => {
    // Get position relative to container
    const rect = container.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    
    // Center the effect: -50 to +50 range, but constrained
    const rawX = (offsetX / container.clientWidth - 0.5) * 100;
    const x = clamp(rawX, -60, 60);

    ship.style.transform = `translate(${x * 0.6}px, 0px)`;
    firstPlane.style.transform = `translate(${x * 0.5}px, 0px) scale(1.03)`;
    secondPlane.style.transform = `translate(${x * 0.4 - 30}px, 0px)`;
    isle_right_3rd.style.transform = `translate(${x * 0.3 + 30}px, 0px)`;
    isle_left_3rd.style.transform = `translate(${x * 0.3 - 30}px, 0px)`;
    sun.style.transform = `translate(${x * 0.08}px, 0px)`;
}

const onMouseMove = (event: MouseEvent) => {
    updateParallax(event.clientX);
}

const onTouchMove = (event: TouchEvent) => {
    if (event.touches.length > 0) {
        updateParallax(event.touches[0].clientX);
    }
}


export const setupParallax = async () => {
    const response = await fetch(asset);
    const svgText = await response.text();

    container.innerHTML = svgText;

    ship = container.querySelector('#SHIP')! as SVGElement;
    firstPlane = container.querySelector('#isle_1st')! as SVGElement;
    secondPlane = container.querySelector('#isle_2nd')! as SVGElement;
    isle_right_3rd = container.querySelector('#isle_right_3rd')! as SVGElement;
    isle_left_3rd = container.querySelector('#isle_left_3rd')! as SVGElement;
    clouds = container.querySelectorAll('#clouds > *') as NodeListOf<SVGElement>;
    sun = container.querySelector('#sun')! as SVGElement;

    // Add animation class to clouds with randomized timing
    clouds.forEach(cloud => {
        cloud.classList.add('cloud-animate');
        // Randomize duration between 10-20 seconds
        const duration = 10 + Math.random() * 10;
        // Randomize delay between 0-5 seconds
        const delay = Math.random() * 5;
        // Randomize direction (normal or reverse)
        const direction = Math.random() > 0.5 ? 'normal' : 'reverse';

        cloud.style.animationDuration = `${duration}s`;
        cloud.style.animationDelay = `${delay}s`;
        cloud.style.animationDirection = direction;
    });

    container.addEventListener('mousemove', onMouseMove as EventListener);
    container.addEventListener('touchmove', onTouchMove as EventListener, { passive: true });
}
