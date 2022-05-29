export function drawCasesOnRealBoard() {
    for (let i = 0; i <= 2549; i++) {
        const elt = document.createElement('div')
        elt.id = i
        elt.style.width = '1.17%'
        elt.style.height = '20px'
        elt.style.textAlign = 'center'
        elt.style.color = 'white'
        let b = 85
        //if (i % b === 0) {
        //elt.innerHTML = i
        //} else {
        elt.innerHTML = '#'
        //}
        document.getElementById('realBoard').appendChild(elt)
    }
}
