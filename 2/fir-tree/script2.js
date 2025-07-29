

let maxHeight = 9

createTreeSegment(1, '*', 9)
createTreeSegment(3, '^', 9)
createTreeSegment(5, '^', 9)
createTreeSegment(9, '^', 9)


function createTreeSegment(height, symbol = '^', maxHeight) {


    for (let index = 0; index < height; index++) {
        let segment = ''

        segment += '/'.repeat(maxHeight - index - 1)

        let symbolCount = 1 + index * 2;
        for (let j = 0; j < symbolCount; j++) {
            segment += symbol
        }

        segment += '\\'.repeat(maxHeight - index - 1)

        console.log(segment)
    }
}