const btnRock = document.getElementById('btn-rock')
const btnPaper = document.getElementById('btn-paper')
const btnScissors = document.getElementById('btn-scissors')
const btnReset = document.getElementById('btn-reset')
const chatLog = document.getElementById('chat-log')

const computerRock = document.getElementById('computer-rock')
const computerPaper = document.getElementById('computer-paper')
const computerScissors = document.getElementById('computer-scissors')
const questionMark = document.getElementById('question-mark')

let playerChoice
// variable to store the players choice when a buttons is clicked

let computerChoice
// variable to store the computers choice

let playerScore
// variable to store the won/lost games of the player

let computerScore
// variable to store the won/lost games of the computer

btnReset.disabled = true

btnRock.addEventListener('click', () => {
  playerChoice = 'Rock'
  randomChoice()
  compareChoice(playerChoice, computerChoice)
  btnPaper.style.opacity = '0.3'
  btnScissors.style.opacity = '0.3'
  btnRock.disabled = true
  btnPaper.disabled = true
  btnScissors.disabled = true
  btnReset.disabled = false
  document.body.classList.add('disable-hover')
})

btnPaper.addEventListener('click', () => {
  playerChoice = 'Paper'
  randomChoice()
  compareChoice(playerChoice, computerChoice)
  btnRock.style.opacity = '0.3'
  btnScissors.style.opacity = '0.3'
  btnRock.disabled = true
  btnPaper.disabled = true
  btnScissors.disabled = true
  btnReset.disabled = false
  document.body.classList.add('disable-hover')
})

btnScissors.addEventListener('click', () => {
  playerChoice = 'Scissors'
  randomChoice()
  compareChoice(playerChoice, computerChoice)
  btnPaper.style.opacity = '0.3'
  btnRock.style.opacity = '0.3'
  btnRock.disabled = true
  btnPaper.disabled = true
  btnScissors.disabled = true
  btnReset.disabled = false
  document.body.classList.add('disable-hover')
})

function randomChoice () {
  // function computer makes a random choice Rock Paper or Scissors
  const randomNumber = Math.random()
  console.log(randomNumber)

  if (randomNumber <= 0.33) {
    computerChoice = 'Rock'
    console.log('Rock')
    questionMark.style.display = 'none'
    computerRock.style.display = 'block'
  } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
    computerChoice = 'Paper'
    console.log('Paper')
    questionMark.style.display = 'none'
    computerPaper.style.display = 'block'
  } else {
    computerChoice = 'Scissors'
    console.log('Scissors')
    questionMark.style.display = 'none'
    computerScissors.style.display = 'block'
  }
}

function compareChoice (playerChoice, computerChoice) {
  // function to compamer player's choice with computer's choice
  if (playerChoice === computerChoice) {
    chatLog.textContent = `You picked ${playerChoice}. The Computer picked ${computerChoice}. It's a draw.`
  } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
    chatLog.textContent = `You picked ${playerChoice}. The Computer picked ${computerChoice}. You win!`
  } else if (playerChoice === 'Rock' && computerChoice === 'Paper') {
    chatLog.textContent = `You picked ${playerChoice}. The Computer picked ${computerChoice}. You lose.`
  } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
    chatLog.textContent = `You picked ${playerChoice}. The Computer picked ${computerChoice}. You win!`
  } else if (playerChoice === 'Paper' && computerChoice === 'Scissors') {
    chatLog.textContent = `You picked ${playerChoice}. The Computer picked ${computerChoice}. You lose.`
  } else if (playerChoice === 'Scissors' && computerChoice === 'Rock') {
    chatLog.textContent = `You picked ${playerChoice}. The Computer picked ${computerChoice}. You lose.`
  } else {
    chatLog.textContent = `You picked ${playerChoice}. The Computer picked ${computerChoice}. You win!`
  }
}

btnReset.addEventListener('click', () => {
  // function to reset the game
  location.reload()
})
