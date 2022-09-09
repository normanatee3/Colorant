const player1 = {
    name: "P1",
    xPosition: 1,
    yPosition: 7
}
const player2 = {
    name: "P2",
    xPosition: 20,
    yPosition: 7
}
const can = {
    xPosition: 0,
    yPosition: 0
}
let pinkEndScore=0;
let gScoreInt = null;
let pScoreInt = null;
let timerInt = null;
let sprayInt = null;
let canInt = null;
let greenEndScore=0;

let highScores = [
    {name: 'Max', team:'pink', score:3},
    {name: 'John', team:'green', score:2},
    {name: 'Haley', team:'pink', score:5},
    {name: 'Cory', team:'green', score:7},
    {name: 'Goku', team:'pink', score:9},
    {name: 'Liz', team:'green', score:1},
    {name: 'Kelly', team:'green', score:3},
    {name: 'Wanda', team:'pink', score:3},
    {name: 'Brandon', team:'pink', score:6},
    {name: 'Fred', team:'green', score:3}
]

if(!localStorage.getItem('highScoreBoard')){
    localStorage.setItem('highScoreBoard', JSON.stringify(highScores))
}

document.addEventListener('keydown', (pressed) =>{
    if(pressed.key == 'd'){
        if(player1.xPosition < 20){

            let pretarget = document.querySelector(`.row${player1.yPosition}.column${player1.xPosition}`)
            pretarget.classList.remove('greenGlow', 'gls','gus','grs','gds','glw','gdw','guw','grw')
            player1.xPosition = player1.xPosition+1
            let target = document.querySelector(`.row${player1.yPosition}.column${player1.xPosition}`)
            target.classList.add('green')
            target.classList.remove('pink')
            target.classList.add('greenGlow', 'grw')
        }
    }
    if(pressed.key == 's'){
        if(player1.yPosition < 14){

            let pretarget = document.querySelector(`.row${player1.yPosition}.column${player1.xPosition}`)
            pretarget.classList.remove('greenGlow','gls','gus','grs','gds','glw','gdw','guw','grw')
            player1.yPosition = player1.yPosition+1
            let target = document.querySelector(`.row${player1.yPosition}.column${player1.xPosition}`)
            target.classList.add('green')
            target.classList.remove('pink')
            target.classList.add('greenGlow','gdw')
        }
    }
    if(pressed.key == 'w'){
        if(player1.yPosition > 0){

            let pretarget = document.querySelector(`.row${player1.yPosition}.column${player1.xPosition}`)
            pretarget.classList.remove('greenGlow','gls','gus','grs','gds','glw','gdw','guw','grw')
            player1.yPosition = player1.yPosition-1
            let target = document.querySelector(`.row${player1.yPosition}.column${player1.xPosition}`)
            target.classList.add('green')
            target.classList.remove('pink')
            target.classList.add('greenGlow','guw')
        }
    }
    if(pressed.key == 'a'){
        if(player1.xPosition > 1){

            let pretarget = document.querySelector(`.row${player1.yPosition}.column${player1.xPosition}`)
            pretarget.classList.remove('greenGlow','gls','gus','grs','gds','glw','gdw','guw','grw')
            player1.xPosition = player1.xPosition-1
            let target = document.querySelector(`.row${player1.yPosition}.column${player1.xPosition}`)
            target.classList.add('green')
            target.classList.remove('pink')
            target.classList.add('greenGlow','glw')
        }
    }
    
})
document.addEventListener('keydown', (pressed) =>{
    if(pressed.key == 'ArrowRight'){
        if(player2.xPosition < 20){

            let pretarget = document.querySelector(`.row${player2.yPosition}.column${player2.xPosition}`)
            pretarget.classList.remove('pinkGlow','pls','pus','prs','pds','plw','pdw','puw','prw')
            player2.xPosition = player2.xPosition+1
            let target = document.querySelector(`.row${player2.yPosition}.column${player2.xPosition}`)
            target.classList.add('pink')
            target.classList.remove('green')
            target.classList.add('pinkGlow','prw')
        }
    }
    if(pressed.key == 'ArrowDown'){
        if(player2.yPosition < 14){

            let pretarget = document.querySelector(`.row${player2.yPosition}.column${player2.xPosition}`)
            pretarget.classList.remove('pinkGlow','pls','pus','prs','pds','plw','pdw','puw','prw')
            player2.yPosition = player2.yPosition+1
            let target = document.querySelector(`.row${player2.yPosition}.column${player2.xPosition}`)
            target.classList.add('pink')
            target.classList.remove('green')
            target.classList.add('pinkGlow','pdw')
        }
    }
    if(pressed.key == 'ArrowUp'){
        if(player2.yPosition > 0){

            let pretarget = document.querySelector(`.row${player2.yPosition}.column${player2.xPosition}`)
            pretarget.classList.remove('pinkGlow','pls','pus','prs','pds','plw','pdw','puw','prw')
        player2.yPosition = player2.yPosition-1
        let target = document.querySelector(`.row${player2.yPosition}.column${player2.xPosition}`)
        target.classList.add('pink')
        target.classList.remove('green')
        target.classList.add('pinkGlow','puw')
    }
}
    if(pressed.key == 'ArrowLeft'){
        if(player2.xPosition > 1){

            let pretarget = document.querySelector(`.row${player2.yPosition}.column${player2.xPosition}`)
            pretarget.classList.remove('pinkGlow','pls','pus','prs','pds','plw','pdw','puw','prw')
            player2.xPosition = player2.xPosition-1
            let target = document.querySelector(`.row${player2.yPosition}.column${player2.xPosition}`)
            target.classList.add('pink')
            target.classList.remove('green')
            target.classList.add('pinkGlow','plw')
        }
    }
    
})
document.addEventListener('keyup', (pressed) =>{
    if(pressed.key == 'd'){
        let target = document.querySelector(`.row${player1.yPosition}.column${player1.xPosition}`)
        target.classList.remove('glw','gdw','guw','grw')
        target.classList.add('grs')
    }
    if(pressed.key == 's'){
        let target = document.querySelector(`.row${player1.yPosition}.column${player1.xPosition}`)
        target.classList.remove('glw','gdw','guw','grw')
        target.classList.add('gds')
    }
    if(pressed.key == 'w'){
        let target = document.querySelector(`.row${player1.yPosition}.column${player1.xPosition}`)
        target.classList.remove('glw','gdw','guw','grw')
        target.classList.add('gus')
    }
    if(pressed.key == 'a'){
        let target = document.querySelector(`.row${player1.yPosition}.column${player1.xPosition}`)
        target.classList.remove('glw','gdw','guw','grw')
        target.classList.add('gls')
    }
    
})
document.addEventListener('keyup', (pressed) =>{
    if(pressed.key == 'ArrowRight'){
        let target = document.querySelector(`.row${player2.yPosition}.column${player2.xPosition}`)
        target.classList.remove('plw','pdw','puw','prw')
        target.classList.add('prs')
    }
    if(pressed.key == 'ArrowDown'){
        let target = document.querySelector(`.row${player2.yPosition}.column${player2.xPosition}`)
        target.classList.remove('plw','pdw','puw','prw')
        target.classList.add('pds')
    }
    if(pressed.key == 'ArrowUp'){
        let target = document.querySelector(`.row${player2.yPosition}.column${player2.xPosition}`)
        target.classList.remove('plw','pdw','puw','prw')
        target.classList.add('pus')
    }
    if(pressed.key == 'ArrowLeft'){
        let target = document.querySelector(`.row${player2.yPosition}.column${player2.xPosition}`)
        target.classList.remove('plw','pdw','puw','prw')
        target.classList.add('pls')
    }
})
const startGame = () =>{
    let start = document.querySelector('.startContainer')
    player1.name = window.prompt(`Who's Playing Green?`)
    player2.name = window.prompt(`Who's Playing Pink?`)
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
    sprayCan()
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
        mainMenu()
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
    greenstart.classList.add('green', 'greenGlow', 'grs')
    let pinkstart = document.querySelector('.row7 .column20')
    pinkstart.classList.add('pink', 'pinkGlow', 'pls')
    

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
    let timeRemaining = 45
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
                pinkSort()
                quitGame()
                endGameMenu()
            }else if(pinkEndScore < greenEndScore){
                greenSort()
                quitGame()
                endGameMenu()
            }else if(pinkEndScore = greenEndScore){
                timeRemaining = 5
                let timer = document.querySelector('.gameTimer')
                timer.textContent = `Time Remaining: ${timeRemaining}`
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
    
}
const resetBoard = () =>{
    clearInterval(gScoreInt)
    clearInterval(pScoreInt)
    clearInterval(timerInt)
    clearInterval(sprayInt)
    clearInterval(canInt)
    player1.xPosition = 1
    player1.yPosition = 7
    player2.xPosition = 20
    player2.yPosition = 7
}
const mainMenu = () =>{
    let newScreen = document.createElement('div')
    newScreen.classList.add('startContainer', 'screenBox')
    document.body.appendChild(newScreen)
    // logo
    let logo = document.createElement('img')
    logo.classList.add('logo')
    logo.src = ('https://i.ibb.co/LJz6JwV/unnamed.png')
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
    let leaderBtn = document.querySelector('.leaderButton')
    leaderBtn.addEventListener('click', () =>{
        leaderMenu()
    })

    // instructions
    let button3 = document.createElement('button')
    button3.classList.add('howtoButton')
    button3.textContent = 'HOW TO PLAY'
    newScreen.appendChild(button3)
    let howtoBtn = document.querySelector('.howtoButton')
    howtoBtn.addEventListener('click', () =>{
        howToMenu()
    })
}
const endGameMenu = () =>{
    let newScreen = document.createElement('div')
    newScreen.classList.add('gameContainer', 'screenBox')
    document.body.appendChild(newScreen)
    // text board
    let endBoard = document.createElement('div')
    endBoard.classList.add('endBoard')
    endBoard.setAttribute('style', 'white-space: pre-wrap')
    newScreen.appendChild(endBoard)
    // text board content
    if(pinkEndScore > greenEndScore){
        endBoard.style.color = 'palevioletred'
        endBoard.textContent = `${player2.name} has ${pinkEndScore} and ${player1.name} has ${greenEndScore}. \r\n \r\n${player2.name} wins!`
    }else if(pinkEndScore < greenEndScore){
        endBoard.style.color = 'greenyellow'
        endBoard.textContent = `${player1.name} has ${greenEndScore} and ${player2.name} has ${pinkEndScore}. \r\n \r\n${player1.name} wins!`
    }
    // main menu
    let button1 = document.createElement('button')
    button1.classList.add('menuButton')
    button1.textContent = 'MAIN MENU'
    newScreen.appendChild(button1)
    let menuBtn = document.querySelector('.menuButton')
    menuBtn.addEventListener('click', () =>{
        quitGame()
        mainMenu()
    })
}
const leaderMenu = () =>{
    let oldScreen = document.querySelector('.startContainer')
    oldScreen.remove()
    let newScreen = document.createElement('div')
    newScreen.classList.add('startContainer', 'screenBox')
    document.body.appendChild(newScreen)
    let leaderBoard = document.createElement('div')
    leaderBoard.classList.add('leaderBoard')
    newScreen.appendChild(leaderBoard)



    let leaderTitle = document.createElement('div')
    leaderTitle.classList.add('headline')
    leaderTitle.textContent = 'LEADERBOARD'
    leaderTitle.addEventListener('dblclick', ()=>{
        localStorage.clear()
    })
    leaderBoard.appendChild(leaderTitle)

    for(i=0; i<10; i++){
        let leaderCard = document.createElement('div')
        leaderCard.classList.add('card')
        leaderCard.style.backgroundColor = highScores[i].team
        leaderBoard.appendChild(leaderCard)
        let leaderName = document.createElement('div')
        leaderName.classList.add('menuText')
        leaderName.textContent = highScores[i].name
        leaderCard.appendChild(leaderName)
        let leaderScore = document.createElement('div')
        leaderScore.classList.add('menuText')
        leaderScore.textContent = highScores[i].score
        leaderCard.appendChild(leaderScore)
    }

    let button1 = document.createElement('button')
    button1.classList.add('menuButton2')
    button1.textContent = 'MAIN MENU'
    newScreen.appendChild(button1)
    let menuBtn = document.querySelector('.menuButton2')
    menuBtn.addEventListener('click', () =>{
        let oldScreen = document.querySelector('.startContainer')
        oldScreen.remove()
        mainMenu()
    })
}
const howToMenu = () =>{
    let oldScreen = document.querySelector('.startContainer')
    oldScreen.remove()
    let newScreen = document.createElement('div')
    newScreen.classList.add('startContainer', 'screenBox')
    document.body.appendChild(newScreen)
    let howtoBoard = document.createElement('div')
    howtoBoard.classList.add('howtoBoard', 'menu2Text')
    newScreen.appendChild(howtoBoard)
    howtoBoard.textContent = `
    
    
    
    At the Main Menu, press  (START)  to initiate the game.
    
    Player 1  (Green)  enters their Name, then Player 2  (Pink) .
    
    You have until the  (TIMER)  runs out to move around, painting as much of the street your color as possible. But be careful! Your opponent can paint over you!
    
    The player with the highest  (SCORE)  at the end wins, and if their score is high enough, it will appear on the  (LEADERBOARD) .
    
    In the case of a tie, the  (TIMER)  will turn red, and you'll go into  (OVERTIME) . 
    
    Keep battling until somebody wins!
    
    CONTROLS: 

    Player 1:
    
    UP --- W
    LEFT --- A
    DOWN --- S
    RIGHT --- D
    
    Player 2:
    
    UP --- Arrow Up
    LEFT --- Arrow Left
    DOWN --- Arrow Down
    RIGHT --- Arrow Right`




    let button1 = document.createElement('button')
    button1.classList.add('menuButton2')
    button1.textContent = 'MAIN MENU'
    newScreen.appendChild(button1)
    let menuBtn = document.querySelector('.menuButton2')
    menuBtn.addEventListener('click', () =>{
        let oldScreen = document.querySelector('.startContainer')
        oldScreen.remove()
        mainMenu()
    })
}
const pinkSort = () =>{
    let pinkFinal = {name: player2.name, team: 'pink', score: pinkEndScore}
    highScores = JSON.parse(localStorage.getItem('highScoreBoard'))
    highScores.push(pinkFinal)
    highScores.sort(function(a,b){return b.score-a.score})
    highScores.pop()
    localStorage.setItem('highScoreBoard', JSON.stringify(highScores))
}
const greenSort = () =>{
    let greenFinal = {name: player1.name, team: 'green', score: greenEndScore}
    highScores = JSON.parse(localStorage.getItem('highScoreBoard'))
    highScores.push(greenFinal)
    highScores.sort(function(a,b){return b.score-a.score})
    highScores.pop()
    localStorage.setItem('highScoreBoard', JSON.stringify(highScores))
}
pinkSort()


const sprayCan = () =>{
    sprayInt = setInterval(()=>{
        let oldCanLocation = document.querySelector(`.row${can.yPosition}.column${can.xPosition}`)
        oldCanLocation.classList.remove('sprayCan')
        can.xPosition = Math.floor(Math.random()*20)+1
        can.yPosition = Math.floor(Math.random()*15)
        let newCanLocation = document.querySelector(`.row${can.yPosition}.column${can.xPosition}`)
        newCanLocation.classList.add('sprayCan')
        
    },5000)

    canInt = setInterval(()=>{
        if(player1.xPosition == can.xPosition && player1.yPosition == can.yPosition){
            let canLocation = document.querySelector(`.row${can.yPosition}.column${can.xPosition}`)
            canLocation.classList.remove('sprayCan')

            for(i = -2; i < 3; i++){
                for(j = -2; j < 3; j++){
                    let target = document.querySelector(`.row${can.yPosition+i}.column${can.xPosition+j}`)
                    if(target){
                        target.classList.add('green')
                        target.classList.remove('pink')
                    }
                }
            }

        }else if(player2.xPosition == can.xPosition && player2.yPosition == can.yPosition){
            let canLocation = document.querySelector(`.row${can.yPosition}.column${can.xPosition}`)
            canLocation.classList.remove('sprayCan')

            for(i = -2; i < 3; i++){
                for(j = -2; j < 3; j++){
                    let target = document.querySelector(`.row${can.yPosition+i}.column${can.xPosition+j}`)
                    if(target){
                        target.classList.add('pink')
                        target.classList.add('green')
                    }
                }
            }

        }
    },10)
}



