const container = document.querySelector('.container');



const onMouseMove = (event) => {
    let x = event.clientX;
    let y = event.clientY;

    for (const line of lines) {
        const l = line.getBoundingClientRect();
        const lineX = l.left + l.width / 2;
        const lineY = l.top + l.height / 2;

        let angle = Math.atan2(y - lineY, x - lineX) + Math.PI / 2;

        line.style.transform = `rotateZ(${angle}rad)`;
        line.style.filter = `hue-rotate(${angle}rad)`;
    }
}

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
}

for (let i = 0; i < 120; i++) {
    const line = document.createElement('div');
    line.classList.add('line');
    container.appendChild(line);
}


const lines = document.querySelectorAll('.line');

container.addEventListener('mousemove', onMouseMove);
container.addEventListener('mouseleave', reset);

