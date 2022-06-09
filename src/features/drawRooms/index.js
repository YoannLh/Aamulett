const rooms = [
    { width: 6, height: 5 },
    { width: 12, height: 9 },
    { width: 10, height: 5 },
    { width: 8, height: 7 },
    { width: 5, height: 7 },
]

/**
 * function
 * From a random case, draw a room (bottom, left, top, right and floor)
 * with random sizes from array rooms
 */
export function drawRooms() {
    let numberOfRooms = 10
    const allCasesOccupedByRooms = []
    for (let z = 0; z <= numberOfRooms; z++) {
        const tempBottom = []
        const tempLeft = []
        const tempRight = []
        const tempTop = []
        const tempFloor = []
        const tempMarginOneCase = []
        let inc = z
        let randomCase = Math.floor(Math.random() * 2489)
        let randomRoom = rooms[Math.floor(Math.random() * rooms.length)]

        /**
         * function
         * Check if the first case of a room is not present
         * in borders top and right to not break the program
         * or draw half room cut in right and left on the board
         */
        function checkPaddingOfGameBoard() {
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
                randomCase = Math.floor(Math.random() * 2489)
                checkPaddingOfGameBoard()
            }
        }

        checkPaddingOfGameBoard()

        // store bottom
        for (let i = 0; i <= randomRoom.width; i++) {
            tempBottom.push('case ' + Number(randomCase + i))
        }
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
                'case ' +
                    Number(randomCase + i - randomRoom.height * 85 - 85 - 85)
            )
        }
        for (let i = -1; i <= randomRoom.height + 1; i++) {
            tempMarginOneCase.push(
                'case ' + Number(randomCase - i * 85 - 85 - 1)
            )
        }
        for (let i = -1; i <= randomRoom.height + 1; i++) {
            tempMarginOneCase.push(
                'case ' +
                    Number(randomCase + randomRoom.width - i * 85 - 85 + 1)
            )
        }
        /**
         * function
         * Check if the temporay stored room match with rooms stocked in allCasesOccupedByRooms
         * If it's true, restart the main loop (erasing all temporaries arrays)
         * If false, draw room
         */
        function checkRooms() {
            for (const el of allCasesOccupedByRooms) {
                if (
                    tempBottom.includes(el) ||
                    tempLeft.includes(el) ||
                    tempRight.includes(el) ||
                    tempTop.includes(el) ||
                    tempFloor.includes(el) ||
                    tempMarginOneCase.includes(el)
                ) {
                    z = inc - 1
                    return
                }
            }
            for (const b of tempBottom) {
                document.getElementById(b).innerHTML = '_'
                allCasesOccupedByRooms.push(b)
            }
            for (let i = 0; i < tempLeft.length; i++) {
                document.getElementById(tempLeft[i]).innerHTML = '|'
                if (i === Math.round(tempLeft.length / 2 - 1)) {
                    document.getElementById(tempLeft[i]).innerHTML = '+'
                }
                allCasesOccupedByRooms.push(tempLeft[i])
            }
            for (const t of tempTop) {
                document.getElementById(t).innerHTML = '_'
                allCasesOccupedByRooms.push(t)
            }
            for (let i = 0; i < tempRight.length; i++) {
                document.getElementById(tempRight[i]).innerHTML = '|'
                if (i === Math.round(tempRight.length / 2 - 1)) {
                    document.getElementById(tempRight[i]).innerHTML = '+'
                }
                allCasesOccupedByRooms.push(tempRight[i])
            }
            for (const f of tempFloor) {
                document.getElementById(f).innerHTML = '.'
                allCasesOccupedByRooms.push(f)
            }
        }
        checkRooms()
    }
}
