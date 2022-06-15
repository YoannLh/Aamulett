import {
    storeAreaForNoDoorsLeft,
    storeAreaForNoDoorsTop,
    storeAreaForNoDoorsRight,
    storeAreaForNoDoorsBottom,
} from '../storeAreasForNoBadDoors'

const arrayLeft = storeAreaForNoDoorsLeft()
const arrayRight = storeAreaForNoDoorsRight()
const arrayTop = storeAreaForNoDoorsTop()
const arrayBottom = storeAreaForNoDoorsBottom()

const sizesRooms = [
    { width: 6, height: 5 },
    { width: 12, height: 9 },
    { width: 10, height: 5 },
    { width: 8, height: 7 },
    { width: 5, height: 7 },
]

let tempBottom = []
let tempLeft = []
let tempRight = []
let tempTop = []
let tempFloor = []
let tempMarginOneCase = []

const allCasesOccupedByRooms = []

let numberOfRooms = 11

let inc = 0

/**
 * Get a random case and a ramdom size in array rooms, then check if
 * the random case is in extrems sides of game board. If yes, restart,
 * if not call the others functions
 */
export function initRooms() {
    if (inc === 11) return
    for (let z = inc; z <= numberOfRooms; z++) {
        let randomCase = Math.floor(Math.random() * 2489)
        let randomRoom =
            sizesRooms[Math.floor(Math.random() * sizesRooms.length)]
        const outsides = []
        for (let i = 0; i < randomRoom.height * 85 + 85; i++) {
            outsides.push(i)
        }
        let x = 1
        let w = randomRoom.width
        for (let i = 85 * x - w; i < 85 * x; i++) {
            if (x > 30) break
            outsides.push(i)
            if (i === 85 * x - 1) {
                x++
                i = 85 * x - w - 1
            }
        }

        if (outsides.includes(randomCase)) {
            initRooms()
        } else {
            storeTempRoom(randomRoom, randomCase)
            checkIfStacking()
            drawRooms()
            drawDoors(randomCase)
        }
    }
}

/**
 * Store a temp room (left, top, right, bottom, floor and a one case margin)
 * @param {*} randomRoom
 * @param {*} randomCase
 */
function storeTempRoom(randomRoom, randomCase) {
    if (inc === 11) return
    // store left
    for (let i = 0; i < randomRoom.height; i++) {
        tempLeft.push('case ' + Number(randomCase - i * 85 - 85))
    }
    // store top
    for (let i = 0; i <= randomRoom.width; i++) {
        tempTop.push(
            'case ' + Number(randomCase + i - randomRoom.height * 85 - 85)
        )
    }
    // store right
    for (let i = 0; i < randomRoom.height; i++) {
        tempRight.push(
            'case ' + Number(randomCase + randomRoom.width - i * 85 - 85)
        )
    }
    // store bottom
    for (let i = 0; i <= randomRoom.width; i++) {
        tempBottom.push('case ' + Number(randomCase + i))
    }
    // store floor
    for (let i = 1; i < randomRoom.width; i++) {
        for (let x = 1; x <= randomRoom.height; x++) {
            tempFloor.push('case ' + Number(randomCase + i - 85 * x))
        }
    }
    // store a one case margin around rooms to avoid closest room
    for (let i = -1; i <= randomRoom.width + 1; i++) {
        tempMarginOneCase.push('case ' + Number(randomCase + 85 + i))
    }
    for (let i = -1; i <= randomRoom.width + 1; i++) {
        tempMarginOneCase.push(
            'case ' + Number(randomCase + i - randomRoom.height * 85 - 85 - 85)
        )
    }
    for (let i = -1; i <= randomRoom.height + 1; i++) {
        tempMarginOneCase.push('case ' + Number(randomCase - i * 85 - 85 - 1))
    }
    for (let i = -1; i <= randomRoom.height + 1; i++) {
        tempMarginOneCase.push(
            'case ' + Number(randomCase + randomRoom.width - i * 85 - 85 + 1)
        )
    }
}

/**
 *Check if the temp room contained in temp arrays 
 match with all the stored cases in allCasesOccupedByRooms.
 If yes, clean temp arrays and restart all the process
 * @param {*} randomCase
 */
function checkIfStacking(randomCase) {
    if (inc === 11) return
    for (const el of allCasesOccupedByRooms) {
        if (
            tempBottom.includes(el) ||
            tempLeft.includes(el) ||
            tempRight.includes(el) ||
            tempTop.includes(el) ||
            tempFloor.includes(el) ||
            tempMarginOneCase.includes(el)
        ) {
            tempBottom = []
            tempLeft = []
            tempRight = []
            tempTop = []
            tempFloor = []
            tempMarginOneCase = []
            initRooms()
        }
    }
}

/**
 * Draw the actual new room with infos stored in temps arrays
 * @param {*} randomRoom
 * @param {*} randomCase
 */
function drawRooms() {
    if (inc === 11) return
    for (let i = 0; i < tempBottom.length; i++) {
        document.getElementById(tempBottom[i]).innerHTML = '_'
        allCasesOccupedByRooms.push(tempBottom[i])
    }
    for (let i = 0; i < tempLeft.length; i++) {
        document.getElementById(tempLeft[i]).innerHTML = '|'
        allCasesOccupedByRooms.push(tempLeft[i])
    }
    for (const t of tempTop) {
        document.getElementById(t).innerHTML = '_'
        allCasesOccupedByRooms.push(t)
    }
    for (let i = 0; i < tempRight.length; i++) {
        document.getElementById(tempRight[i]).innerHTML = '|'
        allCasesOccupedByRooms.push(tempRight[i])
    }
    for (const f of tempFloor) {
        document.getElementById(f).innerHTML = '.'
        allCasesOccupedByRooms.push(f)
    }
}

/**
 * Check if the actual new room is in left, right, top, bottom areas of game board.
 * If not, draw a door at the middle of the side
 * @param {*} randomCase
 */
function drawDoors(randomCase) {
    if (inc === 11) return
    if (!arrayLeft.includes('case ' + randomCase)) {
        document.getElementById(
            tempLeft[Math.round(tempLeft.length / 2 - 1)]
        ).innerHTML = '+'
    }
    if (!arrayTop.includes('case ' + randomCase)) {
        document.getElementById(
            tempTop[Math.round(tempTop.length / 2 - 1)]
        ).innerHTML = '+'
    }
    if (!arrayRight.includes('case ' + randomCase)) {
        document.getElementById(
            tempRight[Math.round(tempRight.length / 2 - 1)]
        ).innerHTML = '+'
    }
    if (!arrayBottom.includes('case ' + randomCase)) {
        document.getElementById(
            tempBottom[Math.round(tempBottom.length / 2 - 1)]
        ).innerHTML = '+'
    }
    inc++
    initRooms()
}
