let computerChoice
let humanChoice

// get computer choice
function getComputerChoice() {
  let random = Math.floor(Math.random() * 3)

  if (random === 0) {
    return computerChoice = "ROCK"
  }else if (random === 1) {
    return computerChoice = "PAPER"
  }else {
    return computerChoice ="SCISSORS"
  }
}

// get human choice
function getHumanChoice() {
  humanChoice = prompt("Enter one of these to pick: Rock, Paper, Scissors").toUpperCase()

  if (humanChoice !== "ROCK" && humanChoice !== "PAPER" && humanChoice !== "SCISSORS") {
    humanChoice = prompt("Have to be one of these: Rock, Paper, Scissors").toUpperCase()
  }

  return humanChoice
}

// declare the player score variables
let humanScore = 0
let computerScore = 0

// write the logic to play a single round
function playRound(getComputerChoiceFunc, getHumanChoiceFunc) {
  getComputerChoiceFunc()
  getHumanChoiceFunc()

  console.log("computer: ", computerChoice)
  console.log("human: ", humanChoice)
 
  if (computerChoice === "ROCK" && humanChoice === "PAPER" ) {
    humanScore++
    console.log("You win! PAPER beats ROCK")
  } else if (computerChoice === humanChoice){
    console.log("Round Draw!")
  } else if (computerChoice === "ROCK" && humanChoice === "SCISSORS") {
    computerScore++
    console.log("You lose! ROCK beats SCISSORS")
  } else if (computerChoice === "PAPER" && humanChoice === "ROCK") {
    computerScore++
    console.log("You lose! PAPER beats ROCK")
  } else if (computerChoice === "PAPER" && humanChoice === "SCISSORS") {
    humanScore++
    console.log("You win! SCISSORS beat PAPER")
  } else if (computerChoice === "SCISSORS" && humanChoice === "ROCK") {
    humanScore++
    console.log("You win! ROCK beats SCISSORS")
  } else {
    computerScore++
    console.log("You lose! SCISSORS beat PAPER")
  }
}

// write the logic to play the entire game
let roundCounter

function playGame(playRoundFunc, getComputerChoiceFunc, getHumanChoiceFunc) {
  for(roundCounter = 1; roundCounter <= 5; roundCounter++) {
    console.log("Round ", roundCounter)
    
    playRoundFunc(getComputerChoiceFunc, getHumanChoiceFunc)
    
    console.log("Score: You ", humanScore, ", Computer ", computerScore)
  }
  
  if (humanScore === computerScore) {
    console.log("Game Over! DRAW")
    return
  }else if (humanScore > computerScore) {
    console.log("Game Over! You win", humanScore, " - ", computerScore)
  }else {
    console.log("Game Over! You lose", humanScore, " - ", computerScore)
  }
}

playGame(playRound, getComputerChoice, getHumanChoice)
