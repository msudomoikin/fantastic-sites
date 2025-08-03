// DOM — Document Object Model

// querySelector
let header = document.querySelector('#header')
console.log(header)

// Удаление элемента
// element.remove()

// Добавление класса
// element.classList.add
// element.classList.add('error')


let body = document.querySelector('body')
/*
let choice = prompt('Введите тему (light/dark)')

if (choice === 'light') {
    // Удаление класса
    body.classList.remove('dark')
}
*/

// let choice = prompt('Введите цвет:')

// element.style.border = '10px solid ' + choice

let wrapper = document.querySelector('#rectangles-wrapper')

for (let i = 0; i < 300; i = i + 1) {
    // createElement
    let newElement = document.createElement('div')
    newElement.classList.add('rectangle')
    newElement.style.width = i + 'px'

    // innerText
    newElement.innerText = i

    newElement.style.backgroundColor = 'rgb(255, 100, ' + i + ')'
    
    // append
    wrapper.append(newElement)
}

console.log(document.querySelectorAll('.info'))

// addEventListener
header.addEventListener('click', function(){
    header.style.transform = 'rotate(3600deg)'
})
