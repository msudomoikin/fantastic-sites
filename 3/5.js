
let journal = [
    {
        name: 'Адам Арутюнов',
        marks: [5, 5, 4, 5, 5, 3, 5, 4, 4],
    },
    {
        name: 'Иван Дианов',
        marks: [5, 5, 5, 5, 5, 5, 5, 5],
    },
    {
        name: 'Кто-то Третий',
        marks: [2, 4, 4, 3, 4, 2, 1],
    },
]

journal.forEach(entry => {
    console.log(`${entry.name}: ${calculateAvg(entry.marks)}`)
})

function calculateAvg(array) {
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / array.length;

    return average.toFixed(2);
}
