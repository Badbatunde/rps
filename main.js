// function that randomly returns item from array

function computerPlay () {
    let computerRandom = computerList[Math.floor(Math.random() * computerList.length)]
    return computerRandom   
}

let computerList = ['rock', 'paper', 'scissors']
console.log (computerPlay())

function playRound (playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection === 'paper') {
    return 'You Lose! Paper beats Rock.';
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
    return 'Oh! It is a tie.';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Rock trumps Scissors.';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'Oh! It is a tie.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lose! Scissors cuts Paper.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper covers Rock.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Rock trumps Scissors.';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win! Scissors cuts Paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'Oh! It is a tie.';
    } else {
        return 'Wrong input! Input either rock, paper or scissors'
    }
}

let playerSelection = 'rock';
let computerSelection = computerPlay();
let play = playRound (playerSelection, computerSelection);
 console.log (play)
