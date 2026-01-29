let charsContainer = document.querySelector('.chars');
let wrapper = document.querySelector('.wrapper');
let allChars = [];
let tableCells = [];

//create thresholds array
const thresholds = [...Array(101).keys()].map(num => num / 100)

// create chars table
for (var i = 33; i < 127; i++)
    allChars.push(String.fromCharCode(i));

allChars.forEach(char => {
    let charElement = document.createElement('div');
    charElement.classList.add('char', 'table-cell-' + allChars.indexOf(char));
    charElement.textContent = char;
    charsContainer.appendChild(charElement);
    tableCells.push(charElement);
});

const wrapperHeight = wrapper.getBoundingClientRect().height
const charsContainerHeight = charsContainer.getBoundingClientRect().height

const hightlightCell = (element) => {
    element.classList.add('highlight')
    setTimeout(() => {
        element.classList.remove('highlight')
    }, 300)
}
console.log(wrapperHeight, charsContainerHeight);


const observerOptions = {
    root: wrapper,
    //сдвигаем область захвата вниз до середины обертки и делаем её высотой с таблицу символов
    rootMargin: `-${wrapperHeight / 2}px 0px ${charsContainerHeight}px 0px`,
    scrollMargin: `0px`,
    threshold: thresholds,
};

console.log(thresholds);

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        console.log(entry);
        // инверсия диапазона!
        let invertedRatio = 1 - entry.intersectionRatio;
        console.log(invertedRatio.toFixed(2));
        //ищем нужную ячейку и подсвечиваем её
        let currentCellIndex = Math.floor(invertedRatio * tableCells.length)
        let currentCell = document.querySelector(`.table-cell-${currentCellIndex}`);
        if (currentCell) hightlightCell(currentCell);
    })
};


const observer = new IntersectionObserver(observerCallback, observerOptions)
observer.observe(charsContainer)

// dodo stuff


// $('.table-cell.1').addClass('extrabold');
// $('.table-letter').show();

// // показываю и прячу огромную букву на фоне, когда таблица в экране
// const charTable = [].slice.call(
//     document.querySelectorAll('.char')
// );


// let listeners = [];
// const charTableObserver = new IntersectionObserver(
//     (entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 // $('.table-letter').show(); тут показать большую букву

//                 // внутри обсервера, чтобы до этого не считалась
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

