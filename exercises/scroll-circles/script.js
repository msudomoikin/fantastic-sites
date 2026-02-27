let circlesContainer = document.querySelector(".circles-container");
let totalCircles = 10;

const container = document.querySelector('.circles-container');

generateCircles();

function generateCircles() {
    container.innerHTML = ''; // Очищаем контейнер перед генерацией новых кругов
    for (let i = 0; i < totalCircles; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';// Устанавливаем случайные значения через инлайновые переменные

        const size = Math.random() **2 * 200 + 50

        circle.style.setProperty('--i', i);
        circle.style.setProperty('--total', totalCircles);

        const maxBlur = 6;
        const currentBlur = maxBlur - (i * (maxBlur / (totalCircles - 1)));

        // 2. Устанавливаем статичные параметры через JS
        circle.style.filter = `blur(${currentBlur}px)`;

        circle.style.setProperty('--start-x', `${Math.random() ** 3 * 90}%`);
        circle.style.setProperty('--start-y', `${Math.random() ** 3 * 100}%`);
        circle.style.setProperty('--size', size);
        container.appendChild(circle);
        circle.textContent = i + 1; // Добавляем текст внутри круга

        circle.addEventListener('mouseenter', () => {
            circle.style.setProperty('filter', `blur(${0}px)`);
        });
        circle.addEventListener('mouseleave', () => {
            circle.style.setProperty('filter', `blur(${currentBlur}px)`);
        });
    }

}

container.addEventListener('click', generateCircles);