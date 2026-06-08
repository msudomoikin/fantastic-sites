import { getPageSrollProgress } from "./helpers";

const sections = document.querySelectorAll('.section')!;


const checkSectionVisible = () => {

    sections.forEach((section) => {
        let rect = section.getBoundingClientRect()
        
        if (rect.top < window.innerHeight / 1.5 && rect.bottom > window.innerHeight / 2) {
            section.classList.add('section--awaken')
        }

        else {
            section.classList.remove('section--awaken')
        }
    })
    if (getPageSrollProgress() == 0) {
            sections.forEach(section => section.classList.remove('section--awaken'))
        sections[0].classList.add('section--awaken')
        console.log('y');
    }
    if (getPageSrollProgress() == 1) {
        sections.forEach(section => section.classList.remove('section--awaken'))
        sections[sections.length - 1].classList.add('section--awaken')
        console.log('y');
    }
}

export const setupScrollSpy = () => {
    checkSectionVisible();
    document.addEventListener('scroll', checkSectionVisible);
}

