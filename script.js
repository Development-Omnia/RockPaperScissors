let score = 0;
let aiScore = 0;
let pScore = 0;


const pScoreDiv = document.querySelector('#playerScore')
const aiScoreDiv = document.querySelector("#aiScore")

const playerScore = document.createElement('div')
const compScore = document.createElement('div')


const winnerDiv = document.querySelector('.winner')
const winnnerMessage = document.createElement('div')

playerScore.textContent = `${pScore}`;
pScoreDiv.appendChild(playerScore)

compScore.textContent = `${aiScore}`;
aiScoreDiv.appendChild(compScore)


const endScreen = document.getElementById("endScreen")
const gameScreen = document.getElementById("gameScreen")

function updatePlayerScore(score){
    if(score === 5) {
        playerScore.textContent = `Player score: ${score}`;
        pScoreDiv.appendChild(playerScore)
        updateAiScore(aiScore)
        return showEndScreen(`Player Wins! ${pScore}:${aiScore}`)
    }
    playerScore.textContent = `${score}`;
    return pScoreDiv.appendChild(playerScore)
}

function updateAiScore(score){
    if(score === 5) {
        updatePlayerScore(pScore)
        compScore.textContent = `Computer score: ${score}`;
        pScoreDiv.appendChild(compScore)
        return showEndScreen(`Computer Wins! ${aiScore}:${pScore}`)
    }
    compScore.textContent = `${score}`;
    return aiScoreDiv.appendChild(compScore)
}


function showEndScreen(winner){
    console.log(winner)
    winnnerMessage.textContent = `${winner}`;
    winnerDiv.appendChild(winnnerMessage)

    gameScreen.classList.add("hidden")
    endScreen.classList.remove("hidden")
}

function playAgain(){
    pScore = 0;
    aiScore = 0;
    updateAiScore(aiScore)
    updatePlayerScore(pScore)
    gameScreen.classList.remove("hidden")
    endScreen.classList.add("hidden")
}

function computerPlay(){
    let move;
    let moveInt = Math.floor(Math.random() * 3);
    moveInt === 0  ? move = "rock" : moveInt === 1 ? move = "paper" : moveInt === 2 ? move = "scissors" : move='error';
    return move
};



function playRound(computerMove,playerMove){


    playerMove = playerMove.toLocaleLowerCase()

    if(playerMove === "rock"){
        if(computerMove === "paper"){
            ++aiScore
            updateAiScore(aiScore)
        }
        if(computerMove === "scissors"){
            ++pScore
            updatePlayerScore(pScore)
        }
        if(computerMove === "rock"){
            return console.log("Wow a Tie! No one scores.")
        }
    }
    else if(playerMove === "paper"){
        if(computerMove === "paper"){
            return console.log("Wow a Tie! No one scores.")
        }
        if(computerMove === "scissors"){
            ++aiScore
            updateAiScore(aiScore)
        }
        if(computerMove === "rock"){
            ++pScore
            updatePlayerScore(pScore)
        }
    }
    else if(playerMove === "scissors"){
        if(computerMove === "paper"){
            ++pScore
            updatePlayerScore(pScore)
        }
        if(computerMove === "scissors"){
            return console.log("Wow a Tie! No one scores.")
        }
        if(computerMove === "rock"){
            ++aiScore
            updateAiScore(aiScore)            
        }
    } else {
        return console.log("That is not a valid move!")
    }
};


function game(){

    let rounds2Play = window.prompt("How many rounds do you want to play?")

    if(!typeof(rounds2Play) === "number") return console.log("That is not a valid number of rounds!")

    for (let i = 0; i< rounds2Play; i++){
        playRound(computerPlay())
    }
    
    if(pScore+aiScore === 0 ) return
    if(pScore > aiScore){
        return console.log(`Player won! ${pScore}:${aiScore}`)
    }
    else if(pScore < aiScore){
        return console.log(`Computer won! ${aiScore}:${pScore}`)
    }
    else if(pScore == aiScore){
        return console.log(`It was a tie! ${pScore}:${aiScore}`)
    }
    else return console.log('Somethings not adding up here chief. Somethings wrong!')
}


// game()

function consoleLog(inp){
    return console.log(inp)
}


document.getElementById("rock").addEventListener("click", function() {playRound(computerPlay(), "Rock")}); 
document.getElementById("paper").addEventListener("click", function() {playRound(computerPlay(), 'Paper')}); 
document.getElementById("scissors").addEventListener("click", function() {playRound(computerPlay(), "scissors")}); 

document.getElementById("playAgain").addEventListener("click", function() {playAgain()}); 
