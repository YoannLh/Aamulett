/**
 * function
 * Check if the first case of a room is not present
 * in borders top and right to not break the program
 * or draw half room in right and left on the board
 */
// export function checkPaddingOfBoard(randomRoom, randomCase) {
//     const outsides = []

//     for (let i = 0; i < randomRoom.height * 85 + 85; i++) {
//         let elt = document.getElementById('case ' + i)
//         elt.style.color = 'red'
//         elt.innerHTML = '3'
//         outsides.push(i)
//     }

//     let x = 1
//     let w = randomRoom.width

//     for (let i = 85 * x - w; i < 85 * x; i++) {
//         if (x > 30) break
//         let elt = document.getElementById('case ' + i)
//         elt.style.color = 'green'
//         elt.innerHTML = '4'
//         outsides.push(i)
//         if (i === 85 * x - 1) {
//             x++
//             i = 85 * x - w - 1
//         }
//     }
//     if (outsides.includes(randomCase)) {
//         console.log('present dans outsides, re-random')
//         randomCase = Math.floor(Math.random() * 2489)
//         checkPaddingOfBoard(randomRoom, randomCase)
//     }
// }
