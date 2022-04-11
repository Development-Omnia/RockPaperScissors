let score = 0;
let aiScore = 0;
let pScore = 0;


const container = document.querySelector('#scoreContainer');

const playerScore = document.createElement('div');
playerScore.classList.add("pScore")
const compScore = document.createElement('div');
compScore.classList.add("compScore")

container.appendChild(playerScore)
container.appendChild(compScore)


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
            compScore.textContent = `Ai score: ${aiScore}`;
            return container.appendChild(compScore)
            return console.log("Computer Wins!")
        }
        if(computerMove === "scissors"){
            ++pScore
            playerScore.textContent = `Player score: ${pScore}`;
            return container.appendChild(playerScore)

            return console.log("Player Wins!")
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
            return console.log("Computer Wins!")
        }
        if(computerMove === "rock"){
            ++pScore
            return console.log("Player Wins!")
        }
    }
    else if(playerMove === "scissors"){
        if(computerMove === "paper"){
            ++pScore
            return console.log("Player Wins!")
        }
        if(computerMove === "scissors"){
            return console.log("Wow a Tie! No one scores.")
        }
        if(computerMove === "rock"){
            ++aiScore
            return console.log("Computer Wins!")
            
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


