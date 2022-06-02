const rooms = [
    { width: 6, height: 5 },
    { width: 12, height: 8 },
    { width: 10, height: 5 },
    { width: 8, height: 7 },
]

/**
 * function
 * From a random case, draw a room (bottom, left, top, right and floor)
 * with random sizes from array rooms
 */
export function drawRooms() {
    let numberOfRooms = 12
    const allCasesOccupedByRooms = []
    for (let z = 0; z < numberOfRooms; z++) {
        const tempBottom = []
        const tempLeft = []
        const tempRight = []
        const tempTop = []
        const tempFloor = []
        let inc = z
        let randomCase = Math.floor(Math.random() * 2489)
        let randomRoom = rooms[Math.floor(Math.random() * rooms.length)]

        /**
         * function
         * Check if the first case of a room is not present
         * in borders top and right to not break the program
         * or draw half room cut in right and left on the board
         */
        function checkPaddingOfBoard() {
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
                checkPaddingOfBoard()
            }
        }

        checkPaddingOfBoard()

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
        /**
         * function
         * Check if the temp room match with rooms stocked in allCasesOccupedByRooms
         * If yes, reboot the loop
         * If no, draw room
         */
        function checkRooms() {
            for (const el of allCasesOccupedByRooms) {
                if (
                    tempBottom.includes(el) ||
                    tempLeft.includes(el) ||
                    tempLeft.includes(el) ||
                    tempRight.includes(el) ||
                    tempTop.includes(el) ||
                    tempFloor.includes(el)
                ) {
                    z = inc - 1
                    return
                }
            }

            for (const b of tempBottom) {
                if (allCasesOccupedByRooms.includes(b)) {
                } else {
                    document.getElementById(b).innerHTML = '_'
                    allCasesOccupedByRooms.push(b)
                }
            }
            for (const l of tempLeft) {
                if (allCasesOccupedByRooms.includes(l)) {
                } else {
                    document.getElementById(l).innerHTML = '|'
                    allCasesOccupedByRooms.push(l)
                }
            }
            for (const t of tempTop) {
                if (allCasesOccupedByRooms.includes(t)) {
                } else {
                    document.getElementById(t).innerHTML = '_'
                    allCasesOccupedByRooms.push(t)
                }
            }
            for (const r of tempRight) {
                if (allCasesOccupedByRooms.includes(r)) {
                } else {
                    document.getElementById(r).innerHTML = '|'
                    allCasesOccupedByRooms.push(r)
                }
            }
            for (const f of tempFloor) {
                if (allCasesOccupedByRooms.includes(f)) {
                } else {
                    document.getElementById(f).innerHTML = '.'
                    allCasesOccupedByRooms.push(f)
                }
            }
        }
        checkRooms()
    }
}
