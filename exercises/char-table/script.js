let charsContainer = document.querySelector('.chars');

let AllChars = [];
for (var i = 33; i < 127; i++)
    AllChars.push(String.fromCharCode(i));

AllChars.forEach(char => {
    let charElement = document.createElement('div');
    charElement.classList.add('char', 'table-cell-' + AllChars.indexOf(char));
    charElement.textContent = char;
    charsContainer.appendChild(charElement);
});




// dodo stuff


// $('.table-cell.1').addClass('extrabold');
// $('.table-letter').show();

// показываю и прячу огромную букву на фоне, когда таблица в экране
const charTable = [].slice.call(
    document.querySelectorAll('.char')
);


let listeners = [];
const charTableObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // $('.table-letter').show(); тут показать большую букву

                // внутри обсервера, чтобы до этого не считалась
                if (window.matchMedia('(width < 768px)').matches) {
                    const tableCell = document.querySelector('.table-cell-0');
                    tableCell.classList.add('highlight');

                    const listener = () => {
                        const charTableHeight = document.querySelector(
                            '.chars'
                        ).offsetHeight;

                        const charTableCount = document.querySelectorAll('.char')
                            .length;
                        console.log(charTableCount);
                        const charTableOffset =
                            -document
                                .querySelector('.chars')
                                .getBoundingClientRect().top +
                            window.innerHeight / 2;

                        if (charTableOffset >= 0) {
                            const calculatedCellNumber = (
                                charTableOffset /
                                (charTableHeight / charTableCount)
                            ).toFixed(0);
                            const calculatedCell = document.querySelector(`.table-cell-${calculatedCellNumber}`);
                            tableCell.classList.remove('highlight');
                            setTimeout(() => {
                                calculatedCell.classList.remove('highlight');
                            }, 300);
                            calculatedCell.classList.add('highlight');
                        }
                    };
                    window.addEventListener('scroll', listener);
                    listeners.push(listener);
                }
            } else {
                listeners.forEach(l => window.removeEventListener('scroll', l));
                listeners = [];
                // $('.table-letter').hide(); прячу большую букву
            }
        });
    },
    {
        rootMargin: `0px 0px 0px 0px`,
    }
);

charTableObserver.observe(charsContainer);

