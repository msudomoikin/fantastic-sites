const sections = document.querySelectorAll('.section')!;

const checkSectionVisible = () => {
    sections.forEach((section) => {
        let rect = section.getBoundingClientRect()

        if (rect.top < window.innerHeight / 1.5 && rect.bottom > window.innerHeight / 2) {
            section.classList.add('section--awaken')
        } else {
            section.classList.remove('section--awaken')
        }
    })
}

export const setupScrollSpy = () => {
    checkSectionVisible();
    document.addEventListener('scroll', checkSectionVisible);
}

