let a = Number(prompt('Введите первое число'))
let b = Number(prompt('Введите второе число'))
let operation = prompt('Введите символ действия (* + - /)')
let result

if (operation === '*') {
    result = a*b 
    alert(result)
}

if (operation === '+') {
    result = a+b
    alert(result)
}

if (operation === '-') {
    result = a-b
    alert(result)
}

if (operation === '/') {
    result = a/b
    alert(result)
}