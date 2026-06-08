let points = prompt('Введите количество баллов в 100-балльной системе')

if (points >= 90 && points <= 100) {
    alert('Оценка 5')
}

if (points >= 70 && points < 90) {
    alert('Оценка 4')
}

if (points >= 40 && points < 70) {
    alert('Оценка 3')
}

if (points >= 20 && points < 40) {
    alert('Оценка 2')
}

if (points < 20) {
    alert('Оценка 1')
}

