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
            return console.log("Computer Wins!")
        }
        if(computerMove === "scissors"){
            return console.log("Player Wins!")
        }
        if(computerMove === "rock"){
            return console.log("Wow a Tie!")
        }
    }
    else if(playerMove === "paper"){
        if(computerMove === "paper"){
            return console.log("Wow a Tie!")
        }
        if(computerMove === "scissors"){
            return console.log("Computer Wins!")
        }
        if(computerMove === "rock"){
            return console.log("Player Wins!")
        }
    }
    else if(playerMove === "scissors"){
        if(computerMove === "paper"){
            return console.log("Player Wins!")
        }
        if(computerMove === "scissors"){
            return console.log("Wow a Tie!")
        }
        if(computerMove === "rock"){
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


}


game()

// console.log(playRound(playerMove, computerMove))