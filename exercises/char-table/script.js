let charsContainer = document.querySelector('.chars');
let wrapper = document.querySelector('.wrapper');
let bigLetter = document.querySelector('.big-letter');

let allChars = [];
let tableCells = [];
let lastIndex = 0;

//массив порогов для срабатывания observer
const thresholds = [...Array(101).keys()].map(num => num / 100)

// создаем таблицу символов, 33-126 это ascii-коды отображаемых символов + 2 ячейки с неотображаемыми символами,
// чтобы лучше считывались сиволы на границах захвата
// https://learn.parallax.com/reference/ascii-table-0-127/#:~:text=The%20numbers%2032%E2%80%93126%20correspond,%E2%80%93255%20(not%20shown).
for (var i = 32; i < 128; i++) allChars.push(String.fromCharCode(i));



allChars.forEach((char, index) => {
    let charElement = document.createElement('div');
    charElement.classList.add('char', 'table-cell-' + index);
    charElement.textContent = char;
    charsContainer.appendChild(charElement);
    tableCells.push(charElement);
});

// размеры таблицы символов и родителя
const wrapperHeight = wrapper.getBoundingClientRect().height
const charsContainerHeight = charsContainer.getBoundingClientRect().height

// подсветка ячейки таблицы
const highlightCell = (element) => {
    if (!element) return;
    if (element.classList.contains('highlight')) return;
    element.classList.add('highlight')
    setTimeout(() => {
        element.classList.remove('highlight')
    }, 400)
}

const observerOptions = {
    root: wrapper,
    // сдвигаем область захвата вниз, до середины обертки
    // и делаем её высотой с таблицу символов +небольшой запас, чтобы не было дребезга
    rootMargin: `-${(wrapperHeight) / 2}px 0px ${charsContainerHeight + 100}px 0px`,
    scrollMargin: `0px`,
    threshold: thresholds,
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        //пропускаем первое срабатывание
        if (entry.time < 1500) return;

        // приводим значение смещения к сотым долям
        let normalizedRatio = entry.intersectionRatio.toFixed(2)
        console.log(normalizedRatio);

        //очищаем большой символ на границах захвата
        if (normalizedRatio == 1.00 || normalizedRatio == 0.00) {
            bigLetter.textContent = '';
            return;
        };

        // математическая магия,
        // переворачиваем значение смещения
        // и получаем индекс ячейки
        let invertedRatio = 1 - normalizedRatio;
        let index = Math.floor(invertedRatio * tableCells.length)

        // "Доводчик" чтобы подсвечивалось без пропусков.
        if (lastIndex <= index) {
            for (let i = lastIndex; i < index; i++) {
                if (tableCells[i]) {
                    highlightCell(tableCells[i]);
                    bigLetter.textContent = tableCells[i].textContent
                }
            }
        }

        if (lastIndex >= index) {
            for (let i = lastIndex; i > index; i--) {
                if (tableCells[i]) {
                    highlightCell(tableCells[i]);
                    bigLetter.textContent = tableCells[i].textContent
                }
            }
        }

        lastIndex = index
    })
};

const observer = new IntersectionObserver(observerCallback, observerOptions)
observer.observe(charsContainer)

// dodo reference
// https://brandbook.dodopizza.info/#!design/style

// $('.table-cell.1').addClass('extrabold');
// $('.table-letter').show();

// показываю и прячу огромную букву на фоне, когда таблица в экране
// const charTable = [].slice.call(
//     document.querySelectorAll('.char')
// );


// let listeners = [];
// const charTableObserver = new IntersectionObserver(
//     (entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
// $('.table-letter').show(); тут показать большую букву

// внутри обсервера, чтобы до этого не считалась
//                 if (window.matchMedia('(width < 768px)').matches) {
//                     const tableCell = document.querySelector('.table-cell-0');
//                     tableCell.classList.add('highlight');

//                     const listener = () => {
//                         const charTableHeight = document.querySelector(
//                             '.chars'
//                         ).offsetHeight;

//                         const charTableCount = document.querySelectorAll('.char')
//                             .length;
//                         console.log(charTableCount);
//                         const charTableOffset =
//                             -document
//                                 .querySelector('.chars')
//                                 .getBoundingClientRect().top +
//                             window.innerHeight / 2;

//                         if (charTableOffset >= 0) {
//                             const calculatedCellNumber = (
//                                 charTableOffset /
//                                 (charTableHeight / charTableCount)
//                             ).toFixed(0);
//                             const calculatedCell = document.querySelector(`.table-cell-${calculatedCellNumber}`);
//                             tableCell.classList.remove('highlight');
//                             setTimeout(() => {
//                                 calculatedCell.classList.remove('highlight');
//                             }, 300);
//                             calculatedCell.classList.add('highlight');
//                         }
//                     };
//                     window.addEventListener('scroll', listener);
//                     listeners.push(listener);
//                 }
//             } else {
//                 listeners.forEach(l => window.removeEventListener('scroll', l));
//                 listeners = [];
//             }
//         });
//     },
//     {
//         rootMargin: `0px 0px 0px 0px`,
//     }
// );

// charTableObserver.observe(charsContainer);

