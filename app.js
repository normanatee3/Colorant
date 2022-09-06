const player1 = {
    xPosition: 1,
    yPosition: 7
}
const player2 = {
    xPosition: 20,
    yPosition: 7
}


document.addEventListener('keydown', (pressed) =>{
    if(pressed.key == 'd'){
        if(player1.xPosition < 20){

            let pretarget = document.querySelector(`.row${player1.yPosition}.column${player1.xPosition}`)
            pretarget.classList.remove('greenGlow')
            player1.xPosition = player1.xPosition+1
            let target = document.querySelector(`.row${player1.yPosition}.column${player1.xPosition}`)
            target.classList.add('green')
            target.classList.remove('pink')
            target.classList.add('greenGlow')
        }
    }
    if(pressed.key == 's'){
        if(player1.yPosition < 13){

            let pretarget = document.querySelector(`.row${player1.yPosition}.column${player1.xPosition}`)
            pretarget.classList.remove('greenGlow')
            player1.yPosition = player1.yPosition+1
            let target = document.querySelector(`.row${player1.yPosition}.column${player1.xPosition}`)
            target.classList.add('green')
            target.classList.remove('pink')
            target.classList.add('greenGlow')
        }
    }
    if(pressed.key == 'w'){
        if(player1.yPosition > 1){

            let pretarget = document.querySelector(`.row${player1.yPosition}.column${player1.xPosition}`)
            pretarget.classList.remove('greenGlow')
            player1.yPosition = player1.yPosition-1
            let target = document.querySelector(`.row${player1.yPosition}.column${player1.xPosition}`)
            target.classList.add('green')
            target.classList.remove('pink')
            target.classList.add('greenGlow')
        }
    }
    if(pressed.key == 'a'){
        if(player1.xPosition > 1){

            let pretarget = document.querySelector(`.row${player1.yPosition}.column${player1.xPosition}`)
            pretarget.classList.remove('greenGlow')
            player1.xPosition = player1.xPosition-1
            let target = document.querySelector(`.row${player1.yPosition}.column${player1.xPosition}`)
            target.classList.add('green')
            target.classList.remove('pink')
            target.classList.add('greenGlow')
        }
    }
    
})
document.addEventListener('keydown', (pressed) =>{
    if(pressed.key == 'l'){
        if(player2.xPosition < 20){

            let pretarget = document.querySelector(`.row${player2.yPosition}.column${player2.xPosition}`)
            pretarget.classList.remove('pinkGlow')
            player2.xPosition = player2.xPosition+1
            let target = document.querySelector(`.row${player2.yPosition}.column${player2.xPosition}`)
            target.classList.add('pink')
            target.classList.remove('green')
            target.classList.add('pinkGlow')
        }
    }
    if(pressed.key == 'k'){
        if(player2.yPosition < 13){

            let pretarget = document.querySelector(`.row${player2.yPosition}.column${player2.xPosition}`)
            pretarget.classList.remove('pinkGlow')
            player2.yPosition = player2.yPosition+1
            let target = document.querySelector(`.row${player2.yPosition}.column${player2.xPosition}`)
            target.classList.add('pink')
            target.classList.remove('green')
            target.classList.add('pinkGlow')
        }
    }
    if(pressed.key == 'i'){
        if(player2.yPosition > 1){

            let pretarget = document.querySelector(`.row${player2.yPosition}.column${player2.xPosition}`)
            pretarget.classList.remove('pinkGlow')
        player2.yPosition = player2.yPosition-1
        let target = document.querySelector(`.row${player2.yPosition}.column${player2.xPosition}`)
        target.classList.add('pink')
        target.classList.remove('green')
        target.classList.add('pinkGlow')
    }
}
    if(pressed.key == 'j'){
        if(player2.xPosition > 1){

            let pretarget = document.querySelector(`.row${player2.yPosition}.column${player2.xPosition}`)
            pretarget.classList.remove('pinkGlow')
            player2.xPosition = player2.xPosition-1
            let target = document.querySelector(`.row${player2.yPosition}.column${player2.xPosition}`)
            target.classList.add('pink')
            target.classList.remove('green')
            target.classList.add('pinkGlow')
        }
    }
    
})

const startGame = () =>{
    let start = document.querySelector('.startContainer')
    start.remove()
    createGame()
}

const createGame = () =>{
    // make game container
    let body = document.body
    let gameContainer = document.createElement('div')
    gameContainer.classList.add('gameContainer', 'screenBox')
    body.appendChild(gameContainer)
    // set score areas and timer
    scoreBoard('green')
    gameTimer()
    scoreBoard('pink')
    // make game board
    let gameBoard = document.createElement('div')
    gameBoard.classList.add('gameBoard')
    gameContainer.appendChild(gameBoard)


    // set rows/columns in game board
    for(i=0; i<15; i++){
        let row = document.createElement('div')
        row.classList.add('row', `row${i}`)
        gameBoard.appendChild(row)
        for(j=0; j<22; j++){
            let column = document.createElement('div')
            column.classList.add('square', `row${i}`, `column${j}`)
            row.appendChild(column)
        }
    }
    // starting positions
    let greenstart = document.querySelector('.row7 .column1')
    greenstart.classList.add('green', 'greenGlow')
    let pinkstart = document.querySelector('.row7 .column20')
    pinkstart.classList.add('pink', 'pinkGlow')
}

const scoreBoard = (color) =>{
    let container = document.querySelector('.gameContainer')
    let scoreBoard = document.createElement('div')
    scoreBoard.classList.add('scoreBoard', `${color}Board`)
    container.appendChild(scoreBoard)
    
    setInterval(function(){
        let scoreBoard = document.querySelector(`.${color}Board`)
        let squares = document.querySelectorAll(`.${color}`)
        score = squares.length
        scoreBoard.textContent = score
        },10)
}
const gameTimer = () =>{
    let container = document.querySelector('.gameContainer')
    let timer = document.createElement('div')
    timer.classList.add('gameTimer')
    container.appendChild(timer)
    let timeRemaining = 90
    timer.textContent = `Time Remaining: ${timeRemaining}`
    setInterval(function(){
        let timer = document.querySelector('.gameTimer')
        if(timeRemaining>0){

            timeRemaining--
            timer.textContent = `Time Remaining: ${timeRemaining}`
        }
    }, 1000)
}
