export function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export const getPositionInParent = (event: MouseEvent | Touch, container: Element): { x: number, y: number } => {
    const rect = container.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

export const clamp = (value: number, min: number, max: number): number => {
    return Math.max(min, Math.min(max, value));
}

export const kalmanFilter = (coef: number, value: number, oldValue: number) => {
    return value * coef + oldValue * (1 - coef)
}

export const getElementCenter = (element: HTMLElement, parent?: HTMLElement): { x: number, y: number } => {

    const elementRect = element.getBoundingClientRect();

    if (!parent) {
        return {
            x: elementRect.left + elementRect.width / 2,
            y: elementRect.top + elementRect.height / 2
        };
    }

    const parentRect = parent.getBoundingClientRect();
    return {
        x: elementRect.left - parentRect.left + elementRect.width / 2,
        y: elementRect.top - parentRect.top + elementRect.height / 2
    };
}

export const getElementScrollProgress = (element: HTMLElement): number => {
    const rect = element.getBoundingClientRect();
    const progress = (window.innerHeight - rect.y) / (window.innerHeight + rect.height);

    return progress;
};


export const getPageSrollProgress = (): number => {
    const scrollTop = window.scrollY
    const pageHeight = document.body.getBoundingClientRect().height
    return Math.min(scrollTop / (pageHeight - window.innerHeight), 1);
}

export const fitFont = (wrapperClass: string, textElementClass: string) => {
    let wrapperEl = document.querySelector(wrapperClass) as HTMLElement;
    let textEl = document.querySelector(textElementClass) as HTMLElement;
    if (!textEl || !wrapperEl) return

    textEl.style.display = 'inline-block';

    const updateFontSize = () => {
        console.log('update');

        // 1 вариант, последовательно проверять все размеры
        // let currentFontSize = 1;

        // while (true) {
        //     textElement.style.fontSize = `${currentFontSize}px`
        //     console.log(textElement.offsetWidth, wrapperEl.offsetWidth);
        //     if (textElement.offsetWidth >= wrapperEl.offsetWidth) break

        //     currentFontSize = currentFontSize + 1
        // }

        // 2 бинарные поиск, задаем границы поиска,
        // ищем среднее значение и задаем как размер шрифта,
        // дальше проверяем больше или меньше блок чем обертка,
        // сдвигаем соответствующую границу
        let l = 0;
        let r = 100;
        let m: number
        while (r - l > 1) {
            m = (l + r) / 2
            console.log(l, r, m);

            textEl.style.fontSize = `${m}px`

            console.log(textEl);

            if (textEl.offsetWidth < wrapperEl.offsetWidth) {
                l = m
            } else {
                r = m
            }
        }
    }

    updateFontSize()
}

