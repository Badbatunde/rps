// function that randomly returns item from array

function computerPlay () {
    let computerRandom = computerList[Math.floor(Math.random() * computerList.length)]
    return computerRandom   
}

let computerList = ['Rock', 'Paper', 'Scissors']
console.log (computerPlay())
