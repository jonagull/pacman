

// SCRIMBA PACMAN PROJECT


    // JS Methods used in course:

        // .addEveListener()
        // .getElementById()
        // .querySelector()
        // .length()
        // .createElement()
        // .appendChild()
        // .push()
        // .classList.add()
        // .classList.remove()
        // .keyCode
        // .classList.contains()
        // .innerHTML
        // setTimeout()
        // .forEach()
        // class
        // this.
        // constructor()
        // setInterval()
        // Math.floor()
        // Math.random()


const width = 28
const grid = document.querySelector('.grid')
const scoreDisplay = document.querySelector('#score')
let squares = [];
//28 * 28 = 784
  // 0 - pac-dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty

  const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 
]


// create board
function createBoard() {
    for (let i = 0; i < layout.length; i++) {
        // Create a square
        const square = document.createElement('div')
        // put square in grid
        grid.appendChild(square)
        // put squre in an squares array
        squares.push(square)

        if (layout[i] === 0) {
            squares[i].classList.add('pac-dot')
        } else if (layout[i] === 1) {
            squares[i].classList.add('wall')
        } else if (layout[i] === 2) {
            squares[i].classList.add('ghost-lair')
        } else if (layout[i] === 3) {
            squares[i].classList.add('power-pellet')
        } else if (layout[i] === 4) {
            squares[i].classList.add('empty')
        }
    }
}

createBoard();


// Starting position of pacman
let pacmanCurrentIndex = 490

squares[pacmanCurrentIndex].classList.add('pacman')


// keycodes:
    // left - 37
    // right - 39
    // up - 38
    // down - 40

    // keyCode is being replaced with key, so in the future, use this instead

function control(e) {
//     if (e.keyCode === 38) {
//         console.log("up")
//     } else if (e.keyCode === 40) {
//         console.log("down")
//     } else if (e.keyCode === 39) {
//         console.log("right")
//     } else if (e.keyCode === 37) {
//         console.log("left")
//     }


// Move right - index + 1 as long as: index % 28 < 28 - 1
// Move left - index - 1 as long as: index % 28 !== 0
// Move up - index - 28 as long as: index - 28 >= 0
// Move down - index + 28 as long as: index + 28 < 28 * 28 

    squares[pacmanCurrentIndex].classList.remove('pacman')

    switch(e.keyCode) {
        case 40:
            if (pacmanCurrentIndex + width < width * width) pacmanCurrentIndex += width
            break
        case 38:
            if (pacmanCurrentIndex - width >= 0) pacmanCurrentIndex -= width
            break
        case 39:
            if (pacmanCurrentIndex % width < width - 1) pacmanCurrentIndex += 1
            break
        case 37:
            if (pacmanCurrentIndex % width !== 0) pacmanCurrentIndex -= 1
            break 
    }
    squares[pacmanCurrentIndex].classList.add('pacman')
}



document.addEventListener('keyup', control) // This needs two arguments for it two work





// for (let i = 476; i <= 490; i++) {
//     console.log(i%28)
// }