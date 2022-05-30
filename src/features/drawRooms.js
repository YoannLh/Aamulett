const rooms = [
    { width: 6, height: 5 },
    { width: 12, height: 8 },
    { width: 10, height: 5 },
    { width: 8, height: 7 },
]

/**
 * function
 * From a random case, draw a room (bottom, left, top and right)
 * with random choices from array rooms
 */
export function drawRooms() {
    let numberOfRooms = 9
    for (let x = 0; x <= numberOfRooms; x++) {
        let randomCase = Math.floor(Math.random() * 2489)
        let randomRoom = rooms[Math.floor(Math.random() * rooms.length)]

        /**
         * function
         * Check if the first case of a room is not present
         * in borders top and right to not break the program
         * or draw half room in right and left on the board
         */
        function checkPaddingOfBoard() {
            const outsides = []
            for (let i = 0; i < randomRoom.height * 85 + 85; i++) {
                let elt = document.getElementById('case ' + i)
                elt.style.color = 'red'
                elt.innerHTML = '3'
                outsides.push(i)
            }
            let x = 1
            let w = randomRoom.width
            for (let i = 85 * x - w; i < 85 * x; i++) {
                if (x > 30) break
                let elt = document.getElementById('case ' + i)
                elt.style.color = 'green'
                elt.innerHTML = '4'
                outsides.push(i)
                if (i === 85 * x - 1) {
                    x++
                    i = 85 * x - w - 1
                }
            }
            if (outsides.includes(randomCase)) {
                console.log('present dans outsides, re-random')
                randomCase = Math.floor(Math.random() * 2489)
                checkPaddingOfBoard()
            }
        }
        checkPaddingOfBoard()

        for (let i = 0; i <= randomRoom.width; i++) {
            document.getElementById(
                'case ' + Number(randomCase + i)
            ).innerHTML = '_'
        }
        for (let i = 0; i < randomRoom.height; i++) {
            document.getElementById(
                'case ' + Number(randomCase - i * 85 - 85)
            ).innerHTML = '|'
        }
        for (let i = 0; i <= randomRoom.width; i++) {
            document.getElementById(
                'case ' + Number(randomCase + i - randomRoom.height * 85 - 85)
            ).innerHTML = '_'
        }
        for (let i = 0; i < randomRoom.height; i++) {
            document.getElementById(
                'case ' + Number(randomCase + randomRoom.width - i * 85 - 85)
            ).innerHTML = '|'
        }
    }
}
