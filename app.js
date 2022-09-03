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