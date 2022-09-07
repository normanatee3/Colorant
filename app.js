const player1 = {
    xPosition: 1,
    yPosition: 7
}
const player2 = {
    xPosition: 20,
    yPosition: 7
}

let gScoreInt = null;
let pScoreInt = null;
let timerInt = null;
let greenEndScore;
let pinkEndScore;

const leaderBtn = document.querySelector('.leaderButton')

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
        if(player1.yPosition < 14){

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
        if(player1.yPosition > 0){

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
        if(player2.yPosition < 14){

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
        if(player2.yPosition > 0){

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
    // make game HUD
    let gameHUD = document.createElement('div')
    gameHUD.classList.add('gameHUD')
    gameContainer.appendChild(gameHUD)
    // set score areas and timer
    scoreBoard('green')
    gameTimer()
    scoreBoard('pink')
    // make game board
    let gameBoard = document.createElement('div')
    gameBoard.classList.add('gameBoard')
    gameContainer.appendChild(gameBoard)
    // make quit button
    
    let quitButton = document.createElement('button')
    quitButton.classList.add('quitButton')
    quitButton.textContent = 'QUIT'
    gameContainer.appendChild(quitButton)
    let quitBtn = document.querySelector('.quitButton')
    quitBtn.addEventListener('click', () =>{
        quitGame()
    })
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
    let container = document.querySelector('.gameHUD')
    let scoreBoard = document.createElement('div')
    scoreBoard.classList.add('scoreBoard', `${color}Board`)
    container.appendChild(scoreBoard)
    
    if(color == 'green'){
        gScoreInt = setInterval(() =>{
            let scoreBoard = document.querySelector(`.greenBoard`)
            let squares = document.querySelectorAll(`.green`)
            score = squares.length
            scoreBoard.textContent = `Score: ${score}`
            },100)
    }else if(color == 'pink'){
        pScoreInt = setInterval(() =>{
            let scoreBoard = document.querySelector(`.pinkBoard`)
            let squares = document.querySelectorAll(`.pink`)
            score = squares.length
            
            scoreBoard.textContent = `Score: ${score}`
            },100)
    }
}
const gameTimer = () =>{
    let container = document.querySelector('.gameHUD')
    let timer = document.createElement('div')
    timer.classList.add('gameTimer')
    container.appendChild(timer)
    let timeRemaining = 3
    timer.textContent = `Time Remaining: ${timeRemaining}`
    timerInt = setInterval(() =>{
        let timer = document.querySelector('.gameTimer')
        if(timeRemaining>0){
            timeRemaining--
            timer.textContent = `Time Remaining: ${timeRemaining}`
        }else if(timeRemaining==0){
            greenEndScore = document.querySelectorAll('.green').length
            pinkEndScore = document.querySelectorAll('.pink').length
            if(pinkEndScore > greenEndScore){
                alert(`Pink has ${pinkEndScore} and Green has ${greenEndScore}. Pink wins!`)
                quitGame()
            }else if(pinkEndScore < greenEndScore){
                alert(`Green has ${greenEndScore} and Pink has ${pinkEndScore}. Green wins!`) 
                quitGame()
            }else if(pinkEndScore = greenEndScore){
                timeRemaining = 15
                let timer = document.querySelector('.gameTimer')
                timer.textContent = `OVERTIME!!! : ${timeRemaining}`
                timer.style.color = 'red'
            }
            
        }
    }, 1000)
}

const quitGame = () =>{
    resetBoard()
    // erase game screen
    let oldScreen = document.querySelector('.gameContainer')
    oldScreen.remove()
    let newScreen = document.createElement('div')
    newScreen.classList.add('startContainer', 'screenBox')
    document.body.appendChild(newScreen)
    // logo
    let logo = document.createElement('img')
    logo.classList.add('logo')
    logo.src = ('/images/norman-custom-title.png')
    newScreen.appendChild(logo)
    // start button

    let button1 = document.createElement('button')
    button1.classList.add('startButton')
    button1.textContent = 'START'
    newScreen.appendChild(button1)
    let startBtn = document.querySelector('.startButton')
    startBtn.addEventListener('click', () =>{
        startGame()
    })

    // leaderboard button

    let button2 = document.createElement('button')
    button2.classList.add('leaderButton')
    button2.textContent = 'LEADERBOARD'
    newScreen.appendChild(button2)

    // instructions
    let button3 = document.createElement('button')
    button3.classList.add('howtoButton')
    button3.textContent = 'HOW TO PLAY'
    newScreen.appendChild(button3)

}

const resetBoard = () =>{
    clearInterval(gScoreInt)
    clearInterval(pScoreInt)
    clearInterval(timerInt)
    player1.xPosition = 1
    player1.yPosition = 7
    player2.xPosition = 20
    player2.yPosition = 7
}


