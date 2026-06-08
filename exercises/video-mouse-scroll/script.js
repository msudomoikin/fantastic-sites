let video = document.querySelector('video');
let title = document.querySelector('.hero__title');
let time = 0;


title.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        video.addEventListener('timeupdate', updateTime);
        video.style.filter = 'grayscale(0) contrast(0.8) brightness(3)';
    } else {
        video.pause();
        time = video.currentTime;
        video.removeEventListener('timeupdate', updateTime);
        video.style.filter = 'grayscale(1) contrast(0.8) brightness(3)';
    }
})


document.addEventListener('scroll', (event) => {
    if(!video.paused) return;
    let progress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    time = progress * video.duration;
    video.currentTime = time;
});

function updateTime() {
    time = video.currentTime
}