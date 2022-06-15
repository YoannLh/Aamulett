const areaNoDoorLeft = []
const areaNoDoorTop = []
const areaNoDoorRight = []
const areaNoDoorBottom = []

/**
 * store left area of the game board to no create left door here
 * @returns { Array }
 */
export function storeAreaForNoDoorsLeft() {
    let row = 0
    for (let i = 0; i <= 15 + 85 * row; i++) {
        if (row === 30) break
        areaNoDoorLeft.push('case ' + i)
        if (i === 15 + 85 * row) {
            row++
            i = 85 * row - 1
        }
    }
    return areaNoDoorLeft
}

/**
 * store top area of the game board to no create top door here
 * @returns { Array }
 */
export function storeAreaForNoDoorsTop() {
    let row = 1
    for (let i = 0; i <= 85 * row; i++) {
        if (row > 10 || i === 85 * 10) break
        areaNoDoorTop.push('case ' + i)
        if (i === 85 * row) {
            row++
            i = 85 * row - 85
        }
    }
    return areaNoDoorTop
}

/**
 * store right area of the game board to no create right door here
 * @returns { Array }
 */
export function storeAreaForNoDoorsRight() {
    let row = 1
    for (let i = 60; i <= 85 * row; i++) {
        if (row > 30 || i === 2550) break
        areaNoDoorRight.push('case ' + i)
        if (i === 85 * row - 1) {
            row++
            i = 85 * row - 25 - 1
        }
    }
    return areaNoDoorRight
}

/**
 * store bottom area of the game board to no create bottom door here
 * @returns { Array }
 */
export function storeAreaForNoDoorsBottom() {
    let row = 24
    for (let i = 85 * row; i <= 85 * row + 85; i++) {
        if (row > 30 || i === 2550) break
        areaNoDoorBottom.push('case ' + i)
        if (i === 85 * row + 85) {
            row++
            i = 85 * row
        }
    }
    return areaNoDoorBottom
}
