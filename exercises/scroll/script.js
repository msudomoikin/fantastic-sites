let scollText = document.querySelector('.scroll-text');
let element = document.querySelector('.element');
let pageHeight = document.body.getBoundingClientRect().height

window.addEventListener('scroll', function () {
    scollText.textContent = `Scroll Y: ${window.scrollY}px, page height: ${pageHeight - window.innerHeight}px`;
});



