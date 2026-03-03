for (let i = 1; i < 101; i++) {
    checkFizzBuzz(i)
}


function checkFizzBuzz(i) {

    if (i === 0) {
        console.log(i)
        return
    }

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, ' fizzbuzz')
        return
    }

    if (i % 3 === 0) {
        console.log(i, ' fizz')
        return
    }

    if (i % 5 === 0) {
        console.log(i, ' buzz')
        return
    }

    console.log(i)
}
