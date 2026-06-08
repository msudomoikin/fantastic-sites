const overlay = document.querySelector('.overlay')
const container = document.querySelector('.video-container');
const audio = document.querySelector('.bg-audio')
const overlayText = document.querySelector('.overlay__text')

const trackMarquee = document.querySelector('.track-marquee')
const btnPrev = document.querySelector('.audio-button.prev')
const btnStop = document.querySelector('.audio-button.stop')
const btnPlayPause = document.querySelector('.audio-button.play-pause')
const btnNext = document.querySelector('.audio-button.next')

const screens = []
const currentClips = []
const tracks = [
    'assets/music/lo-fi juke spezial vol 2.mp3',
    'assets/music/RVЯ 10 - B1PER.mp3',
    'assets/music/RVЯ 10 - BLDZR.mp3'
]
let currentTrackIndex = Math.floor(Math.random() * tracks.length)
let isStopped = false

const updateMarquee = () => {
    const trackName = tracks[currentTrackIndex].split('/').pop()
    trackMarquee.textContent = trackName
}

const setTrack = (index, play = true) => {
    currentTrackIndex = (index + tracks.length) % tracks.length
    audio.src = tracks[currentTrackIndex]
    audio.load()
    updateMarquee()
    isStopped = false
    btnPlayPause.textContent = 'Pause'
    if (play) {
        audio.play().catch(() => {})
    }
}

const playNextTrack = () => setTrack(currentTrackIndex + 1)
const playPreviousTrack = () => setTrack(currentTrackIndex - 1)

const pauseTrack = () => {
    if (!audio.paused) {
        audio.pause()
        btnPlayPause.textContent = 'Play'
    }
}

const resumeTrack = () => {
    audio.play().then(() => {
        btnPlayPause.textContent = 'Pause'
        isStopped = false
    }).catch(() => {})
}

const stopTrack = () => {
    audio.pause()
    audio.currentTime = 0
    btnPlayPause.textContent = 'Play'
    isStopped = true
}

btnPrev.addEventListener('click', () => {
    playPreviousTrack()
})

btnStop.addEventListener('click', () => {
    stopTrack()
})

btnPlayPause.addEventListener('click', () => {
    if (audio.paused && !isStopped) {
        resumeTrack()
    } else if (isStopped) {
        resumeTrack()
    } else {
        pauseTrack()
    }
})

btnNext.addEventListener('click', () => {
    playNextTrack()
})

audio.addEventListener('ended', () => {
    playNextTrack()
})

overlay.addEventListener('click', () => {
    screens.forEach(screen => {
        screen.play()
    })
    if (audio) {
        audio.play().catch(() => {
            // user gesture should allow playback, but ignore any browser rejection
        })
    }
    overlay.style.display = 'none';
    overlayText.style.display = 'none';
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
    screen.controls = false
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

    screens.push(screen)
    container.insertBefore(screen, overlay);
}

const setupScreens = () => {
    for (let i = 1; i <= 6; i++) {
        createScreen(i)
    }
}

setTrack(currentTrackIndex, false)
setupScreens()


