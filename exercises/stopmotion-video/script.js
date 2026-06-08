let frameWrapper = document.querySelector('.frame-wrapper');
let frameReel = document.querySelector('.frame-reel');
let frameCount = 30;

for (let i = 1; i <= frameCount; i++) {
    let img = document.createElement('img');
    img.src = `./frames/film-${i}.png`;
    img.classList.add('frame');
    frameReel.appendChild(img);
}

frameWrapper.addEventListener('mousemove', function() {
    let mouseX = event.clientX;
    let frameWrapperRect = frameWrapper.getBoundingClientRect();
    let progress = (mouseX - frameWrapperRect.left) / frameWrapperRect.width;

    let frameIndex = Math.floor(progress * frameCount);
    frameIndex = Math.max(0, Math.min(frameIndex, frameCount - 1));
    frameReel.style.transform = `translateX(${-frameIndex * 100}%)`;

});