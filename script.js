

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
let score = 0;
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
            if (!squares[pacmanCurrentIndex + width].classList.contains('ghost-lair') && !squares[pacmanCurrentIndex + width].classList.contains('wall') && pacmanCurrentIndex + width < width * width) pacmanCurrentIndex += width
            break
        case 38:
            if (!squares[pacmanCurrentIndex - width].classList.contains('wall') && pacmanCurrentIndex - width >= 0) pacmanCurrentIndex -= width
            break
        case 39:
            if (!squares[pacmanCurrentIndex + 1].classList.contains('wall') && pacmanCurrentIndex % width < width - 1) pacmanCurrentIndex += 1
            if (pacmanCurrentIndex === 391) pacmanCurrentIndex = 364
            break
        case 37:
            if (!squares[pacmanCurrentIndex - 1].classList.contains('wall') && pacmanCurrentIndex % width !== 0) pacmanCurrentIndex -= 1
            if (pacmanCurrentIndex === 364) pacmanCurrentIndex = 391
            break 
    }
    squares[pacmanCurrentIndex].classList.add('pacman')
    pacDotEaten();
    moveGhost();
}


document.addEventListener('keyup', control) // This needs two arguments for it two work

function pacDotEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
        squares[pacmanCurrentIndex].classList.remove('pac-dot')
        score++
        scoreDisplay.innerHTML = score;
    }
}

function  powerPelletEaten() {
    // if square pacman is in contains a power pellet 
    if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
        
    }
    // add a score of 10

    // change each of the four ghost to isScared

    // use setTimeout to unscare ghosts after 10 seconds
}


class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.isScared = false
        this.timerId = NaN
    }
}

const ghosts = [
    new Ghost('blinky', 348, 250),
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 300),
    new Ghost('clyde', 379, 500)
]

ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add('ghost')
})

ghosts.forEach(ghost => moveGhost(ghost))

function moveGhost(ghost) {
    console.log("moved ghost")
    const directions = [-1, +1, -width, +width]
    let direction = directions[Math.floor(Math.random() * directions.length)]
    console.log(direction)

    ghost.timerId = setInterval(() => {
        // remove any ghost
        //add direction to current index
        
        if (!squares[ghost.currentIndex + direction].classList.contains('wall') &&
            !squares[ghost.currentIndex + direction].classList.contains('ghost')) {

            squares[ghost.currentIndex].classList.remove(ghost.className)
            squares[ghost.currentIndex].classList.remove('ghost')
            ghost.currentIndex += direction
            // add ghost class
            squares[ghost.currentIndex].classList.add(ghost.className)
            squares[ghost.currentIndex].classList.add('ghost')
        } else direction = directions[Math.floor(Math.random() * directions.length)]
    }, ghost.speed)

}

 
