function computerPlay() {
    let rand_int = Math.floor(Math.random()*3);
    if (rand_int == 0){
        return "rock";
    }
    else if(rand_int == 1){
        return "paper";
    }
    
    else if(rand_int == 2){
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection){
        return "You drew";
    }

    else if(playerSelection == "rock" && computerSelection == "scissors"){
        return "Computer drew  " + computerSelection + "." + " You won";
         
    }

    else if(playerSelection == "rock" && computerSelection == "paper"){
        return "Computer drew " + computerSelection + "." + " You lost";
         
    }

    else if(playerSelection == "raper" && computerSelection == "scissors"){
        return "Computer drew " + computerSelection + "." + " You Lost";
         
    }

    else if(playerSelection == "paper" && computerSelection == "rock"){
        return "Computer drew " + computerSelection + "." + " You Won";
         
    }

    else if(playerSelection == "scissors" && computerSelection == "paper"){
        return "Computer drew " + computerSelection + "." + " You Won";
         
    }

    else if(playerSelection == "scissors" && computerSelection == "rock"){
        return "Computer drew " + computerSelection + "." + " You Lost";
         
    }
    
}

function userPlay(){
    move = prompt("Enter a move");
    return move;
}

function game(){
    let score = 0;
    for( i = 0 ; i <= 4 ; i++){
        let user_move = userPlay();
        result = playRound(user_move,computerPlay());
        console.log(result);
        if (result.slice(-1) == "w"){
            score ++;
        }
        else if (result.slice(-1) == "t"){
            score --;
        }
        else if (result.slice(-1) == "n"){
            score ++;
        }
    }
    return score;
}