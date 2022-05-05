let score = 0;
let aiScore = 0;
let pScore = 0;


const pScoreDiv = document.querySelector('#playerScore')
const aiScoreDiv = document.querySelector("#aiScore")

const playerScore = document.createElement('div');
playerScore.classList.add("pScore")
const compScore = document.createElement('div');
compScore.classList.add("compScore")

function computerPlay(){
    let move;
    let moveInt = Math.floor(Math.random() * 3);
    moveInt === 0  ? move = "rock" : moveInt === 1 ? move = "paper" : moveInt === 2 ? move = "scissors" : move='error';
    return move
};

function checkWinner(score){
    if(score  === 5) return "winner"
}


function playRound(computerMove,playerMove){


    playerMove = playerMove.toLocaleLowerCase()

    if(playerMove === "rock"){
        if(computerMove === "paper"){
            ++aiScore
            if(aiScore === 5) return "Do something"
            compScore.textContent = `Ai score: ${aiScore}`;
            return aiScoreDiv.appendChild(compScore)
        }
        if(computerMove === "scissors"){
            ++pScore
            if(pScore === 5) return "Do something"
            playerScore.textContent = `Player score: ${pScore}`;
            return pScoreDiv.appendChild(playerScore)
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
            if(aiScore === 5) return "Do something"
            compScore.textContent = `Ai score: ${aiScore}`;
            return aiScoreDiv.appendChild(compScore)
        }
        if(computerMove === "rock"){
            ++pScore
            if(pScore === 5) return "Do something"
            playerScore.textContent = `Player score: ${pScore}`;
            return pScoreDiv.appendChild(playerScore)
        }
    }
    else if(playerMove === "scissors"){
        if(computerMove === "paper"){
            ++pScore
            if(pScore === 5) return "Do something"
            playerScore.textContent = `Player score: ${pScore}`;
            return container.appendChild(playerScore)
        }
        if(computerMove === "scissors"){
            return console.log("Wow a Tie! No one scores.")
        }
        if(computerMove === "rock"){
            ++aiScore
            if(aiScore === 5) return "Do something"
            compScore.textContent = `Ai score: ${aiScore}`;
            return container.appendChild(compScore)
            
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


