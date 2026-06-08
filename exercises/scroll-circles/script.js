let circlesContainer = document.querySelector(".circles-container");
const totalCircles = 5;
const maxBlur = 6;

const containerFront = document.querySelector('.circles-container-front');
const containerBack = document.querySelector('.circles-container-back');

generateCircles(containerFront);
generateCircles(containerBack);

document.addEventListener('click', () => {
    generateCircles(containerFront);
    generateCircles(containerBack, true);
})

function generateCircles(parentElement, blur = false) {
    parentElement.innerHTML = '';
    for (let i = 0; i < totalCircles; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';

        const size = Math.random() ** 2 * 200 + 50
        const currentBlur = blur ? maxBlur - (i * (maxBlur / (totalCircles - 1))) : 0;

        circle.style.setProperty('--i', i);
        circle.style.setProperty('--total', totalCircles);
        circle.style.setProperty('--start-x', `${Math.random() ** 3 * 100}%`);
        circle.style.setProperty('--start-y', `${Math.random() ** 3 * 100}%`);
        circle.style.setProperty('--size', size);
        circle.style.filter = `blur(${currentBlur}px)`;

        circle.textContent = i + 1;

        parentElement.appendChild(circle);
    }
}
