// create references
const rockPlayer = document.querySelector('.rock')
const paperPlayer = document.querySelector('.paper')
const scissorsPlayer = document.querySelector('.scissors')
const resultDisplay = document.querySelector('#result')
let computerChoice
let humanChoice 
let roundCounter = 0
let humanScore = 0
let computerScore = 0

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

// write the logic to play a single round
function playRound(humanChoice) {
  // display round counter
  roundCounter++;
  resultDisplay.innerHTML += `<p>Round ${roundCounter}`

  // get computer choice
  getComputerChoice()

  // display both choice
  console.log("computer: ", computerChoice)
  console.log("human: ", humanChoice)
  resultDisplay.innerHTML += `
    <p>computer: ${computerChoice}</p>
    <p>human: ${humanChoice}</p>
  `
  
  // decide whos win
  if (computerChoice === humanChoice) {
    console.log("Round Draw!")
    resultDisplay.innerHTML += "<p>Round Draw!</p>"
  }else if (computerChoice === "ROCK") {
    if (humanChoice === "PAPER" ) {
      humanScore++
      console.log("You win! PAPER beats ROCK")
      resultDisplay.innerHTML += "<p>You win! PAPER beats ROCK</p>"
    } else {
      computerScore++
      console.log("You lose! ROCK beats SCISSORS")
      resultDisplay.innerHTML += "<p>You lose! ROCK beats SCISSORS</p>"
    }
  }else if (computerChoice === "PAPER") {
    if (humanChoice === "ROCK") {
      computerScore++
      console.log("You lose! PAPER beats ROCK")
      resultDisplay.innerHTML += "<p>You lose! PAPER beats ROCK</p>"
    } else {
      humanScore++
      console.log("You win! SCISSORS beat PAPER")
      resultDisplay.innerHTML += "<p>You win! SCISSORS beat PAPER</p>"
    }
  }else if (computerChoice === "SCISSORS") {
    if (humanChoice === "ROCK") {
      humanScore++
      console.log("You win! ROCK beats SCISSORS")
      resultDisplay.innerHTML += "<p>You win! ROCK beats SCISSORS</p>"
    }else {
      computerScore++
      console.log("You lose! SCISSORS beat PAPER")
      resultDisplay.innerHTML += "<p>You lose! SCISSORS beat PAPER</p>"
    }
  }

  // Display round result
  resultDisplay.innerHTML += `
    <p>Score: You ${humanScore}, Computer ${computerScore}</p>
  `

  // Display game result when somebody reach 5, and reset
  if (computerScore === 5) {
    resultDisplay.innerHTML += `
      <p style="color:red">Game Over! Computer wins, ${computerScore} - ${humanScore}</p>
      `
    roundCounter = 0
    humanScore = 0
    computerScore = 0
  } else if (humanScore === 5) {
    resultDisplay.innerHTML += `
      <p style="color:red">Game Over! You win, ${humanScore} - ${computerScore}</p>
    `
    roundCounter = 0
    humanScore = 0
    computerScore = 0
  }
}

// add listeners for buttons, and assign humanChoice base on human click
rockPlayer.addEventListener('click', () => {
  playRound(humanChoice = 'ROCK')
})
paperPlayer.addEventListener('click', () => {
  playRound(humanChoice = 'PAPER')
})
scissorsPlayer.addEventListener('click', () => {
  playRound(humanChoice = 'SCISSORS')
})








