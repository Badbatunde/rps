// function that randomly returns item from array

function computerPlay () {
    let computerRandom = computerList[Math.floor(Math.random() * 3)]
    return computerRandom   
}

let computerList = ['rock', 'paper', 'scissors']

let playerScore = 0;
let comScore = 0;

function playRound (playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
    return `You Lose! Paper beats Rock. ${comScore++}` ;
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
    return 'Oh! It is a tie.';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return `You Win! Rock trumps Scissors. ${playerScore++}` ;
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'Oh! It is a tie.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return `You Lose! Scissors cuts Paper. ${comScore++}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return `You Win! Paper covers Rock. ${playerScore++}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return `You Lose! Rock trumps Scissors. ${comScore++}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You Win! Scissors cuts Paper. ${playerScore++}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'Oh! It is a tie.';
    } else {
        return 'Wrong input! Input either rock, paper or scissors'
    }
}

let playerSelection = prompt('Rock, Paper or Scissors?', '').toLowerCase();
let computerSelection = computerPlay();
let play = playRound (playerSelection, computerSelection);


function game () {
    for (let i = 0; i < 5; i++) {};
    console.log (`Player: ${playerScore}, Computer: ${comScore}`)
    prompt('Rock, Paper or Scissors?', '').toLowerCase()
    {playRound (playerSelection, computerPlay());}
    console.log (`Player: ${playerScore}, Computer: ${comScore}`)
    prompt('Rock, Paper or Scissors?', '').toLowerCase()
    {playRound (playerSelection, computerPlay());}
    console.log (`Player: ${playerScore}, Computer: ${comScore}`)
    prompt('Rock, Paper or Scissors?', '').toLowerCase()
    {playRound (playerSelection, computerPlay());}
    console.log (`Player: ${playerScore}, Computer: ${comScore}`)
    prompt('Rock, Paper or Scissors?', '').toLowerCase()
    {playRound (playerSelection, computerPlay());}
    console.log (`Player: ${playerScore}, Computer: ${comScore}`)
    if (playerScore > comScore) {
        console.log ('Congratulations! You won the game.');
    } else if (playerScore < comScore) {
        console.log ('Computer wins! Try again.')
    } else {
        console.log ('It is a draw!')
    }
}
game();


