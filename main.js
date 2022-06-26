// function that randomly returns computer selection

function computerPlay () {
    let computerRandom = computerList[Math.floor(Math.random() * 3)]
    return computerRandom   
}

let computerList = ['rock', 'paper', 'scissors']

let playerScore = 0;
let comScore = 0;

let buttons = document.querySelectorAll('button')
buttons.forEach (button => {
    button.addEventListener('click', function() {
        playRound(button.value, computerPlay())
    })
})

function disableBtns () {
    buttons.forEach (button => {
        button.disabled = true
    })
}

let result = document.querySelector('#result');

function playRound (playerSelection, computerSelection) {
    let result = 'begin game'
    if (playerSelection == computerSelection) {
        result = `<br>Oh! It is a tie. <br> <br>Computer: ${comScore} <br> Player: ${playerScore}<br><br>`
    }
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'paper' && computerSelection === 'rock') || 
            (playerSelection === 'scissors' && computerSelection === 'paper')) {
                ++playerScore;
                result = `<br>You win! ${playerSelection} beats ${computerSelection} <br><br>
                Computer: ${comScore} <br> Player: ${playerScore} <br><br>`

                if (playerScore == 5) {
                    result += `You won the game! <a href = ""> Play again. </a><br><br>`
                    disableBtns ();
                }
    }
    else { 
        comScore++;
        result = `<br>You lose! ${computerSelection} beats ${playerSelection} <br><br>
        Computer: ${comScore} <br> Player: ${playerScore} <br><br>`

        if (comScore == 5) {
            result += `You lost the game! <a href = ""> Try Again </a> <br><br>`
            disableBtns ();
        }
    }

    document.getElementById('result').innerHTML = result;
    return
}