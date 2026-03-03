let array = ['яблоки', 'вода', 'шоколад', 'макароны', 'мусорные пакеты']

function concatArray(array) {
    const string = array.join('; ')+'.'
    console.log(string);
    return string
}

concatArray(array)