/**
 * function
 * create all cases of the main board - 2550 cases = ( 30 * 85 ) - 1
 */
export function drawCasesOnGameBoard() {
    //
    //let row = 1
    //
    for (let i = 0; i <= 2549; i++) {
        const elt = document.createElement('div')
        elt.id = 'case ' + i
        elt.dataset.testid = i
        elt.style.width = '1.17%'
        elt.style.height = '20px'
        elt.style.textAlign = 'center'
        elt.style.color = 'white'
        //
        // let b = 85
        // if (i % b === 0) {
        //     elt.innerHTML = row
        //     row++
        // } else {
        //     elt.innerHTML = '#'
        // }
        //
        document.getElementById('gameBoard').appendChild(elt)
    }
}
