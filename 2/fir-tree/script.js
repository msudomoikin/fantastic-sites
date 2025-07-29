let treeHeight = 5;

// for (let index = 0; index < treeHeight; index++) {
//     let starCount = 1 + index * 2;
//     console.log('*'.repeat(starCount))
// }

for (let index = 0; index < treeHeight; index++) {

    let stars = ''

    let spaceCount = treeHeight - index - 1;
    for (let j = 0; j < spaceCount; j++) {
        stars = stars + '.'
    }

    let starCount = 1 + index * 2;
    for (let j = 0; j < starCount; j++) {
        stars = stars + '*'
    }

    console.log(stars);
}