let body = document.body;
let parallaxBackground = document.querySelector('.parallax-background');

document.addEventListener('scroll', () => {
    let progress = window.scrollY / (body.scrollHeight - window.innerHeight);
    parallaxBackground.style.backgroundPositionY = `-${progress * 150}px`;
});
