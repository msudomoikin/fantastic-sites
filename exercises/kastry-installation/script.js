const screens = document.querySelectorAll('.screen')
const overlay = document.querySelector('.overlay')

const currentClips = []

overlay.addEventListener('click', () => {
    screens.forEach(screen => {
        screen.play()
    })
    overlay.style.display = 'none';
})

export const getRandomClip = () => {
    const clip = `assets/clips/clip (${Math.floor(Math.random() * 180) + 1}).mp4`
    if (currentClips.includes(clip)) {
        return getRandomClip()
    }
    return clip
}

const createScreen = (index) => {
    const screen = document.createElement('video')
    screen.classList.add('screen')
    screen.muted = true
    screen.autoplay = true
    screen.width = 640
    screen.height = 400
    screen.volume = 0
    screen.controls = true
    screen.src = getRandomClip()
    currentClips.push(screen.src)
    screen.addEventListener('ended', () => {
        currentClips.splice(currentClips.indexOf(screen.src), 1)
        screen.src = getRandomClip()
    })

    screen.addEventListener('click', () => {
        screen.src = getRandomClip();
    })

    if (index) {
        screen.classList.add(`screen--${index}`)
    }

    document.querySelector('.video-container').appendChild(screen)
}

const setupScreens = () => {

    for (let i = 1; i <= 4; i++) {
        createScreen(i)
    }
}

setupScreens()


