function computerPlay(){
    let move;
    let moveInt = Math.floor(Math.random() * 3);
    moveInt === 0  ? move = "rock" : moveInt === 1 ? move = "paper" : moveInt === 2 ? move = "scissors" : move='error';
    return move
}
