const result = document.querySelector('.result')
const yourScore = document.querySelector('#human')
const machineScore = document.querySelector('#machine')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
  const choices = ['rock', 'paper', 'scissors']

  const randomNumber = Math.floor(Math.random() * 3)

  return choices[randomNumber]
}

const playTheGame = (human, machine) => {
  if (human === machine) {
    result.innerHTML = 'Deu empate!'
  } else if (
    (human === 'paper' && machine === 'rock') ||
    (human === 'rock' && machine === 'scissors') ||
    (human === 'scissors' && machine === 'paper')
  ) {
    humanScoreNumber++
    yourScore.innerHTML = humanScoreNumber

    result.innerHTML = 'Você ganhou!'
  } else {
    machineScoreNumber++
    machineScore.innerHTML = machineScoreNumber
    result.innerHTML = 'Você perdeu!'
  }
}
