let score = 0;
let aiScore = 0;
let pScore = 0;

function computerPlay(){
    let move;
    let moveInt = Math.floor(Math.random() * 3);
    moveInt === 0  ? move = "rock" : moveInt === 1 ? move = "paper" : moveInt === 2 ? move = "scissors" : move='error';
    return move
};

function playRound(computerMove){

    playerMove = window.prompt("Choose your move. Rock, Papper, or Scissors?").toLowerCase();


    if(playerMove === "rock"){
        if(computerMove === "paper"){
            ++aiScore
            return console.log("Computer Wins!")
        }
        if(computerMove === "scissors"){
            ++pScore
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


game()

// console.log(playRound(playerMove, computerMove))