function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

function computerPlay() {
    let rand_int = Math.floor(Math.random()*3);
    if (rand_int == 0){
        return "rock";
    }
    else if(rand_int == 1){
        return "paper";
    }
    
    else if(rand_int == 2){
        return "scissor";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection){
        return "You drew";
    }

    else if(playerSelection == "rock" && computerSelection == "scissor"){
        return "You Won";
         
    }

    else if(playerSelection == "rock" && computerSelection == "paper"){
        return "You Lost";
         
    }

    else if(playerSelection == "paper" && computerSelection == "scissor"){
        return "You Lost";
         
    }

    else if(playerSelection == "paper" && computerSelection == "rock"){
        return "You Won";
         
    }

    else if(playerSelection == "scissor" && computerSelection == "paper"){
        return "You Won";
         
    }

    else if(playerSelection == "scissor" && computerSelection == "rock"){
        return "You Lost";
         
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

function getProperties(e){
    console.log(e);
}

let playerScoreNumber = 0;
let compScoreNumber = 0 ;
const playerScoreNumberString = document.getElementById("playerScoreNumber");
const compScoreNumberString = document.getElementById("compScoreNumber");
const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorChoice = document.getElementById("scissor");
const gameplay = document.getElementById("gamePlay");
const playSelection = document.getElementById("playSelection");
const displayChoiceDiv = document.getElementById("displayChoice");
const gameScore = document.getElementById("gameScore");
const resultHead = document.getElementById("gameHead");
const subHead = document.getElementById("subHeadDiv");

rockChoice.addEventListener("click",() => choiceSelected("rock"));
paperChoice.addEventListener("click",() => choiceSelected("paper"));
scissorChoice.addEventListener("click",() => choiceSelected("scissor"));
resultHead.addEventListener("click",() => resetDom());

rockChoice.addEventListener("mousedown" , function (e){
    rockChoice.classList.add("pressed");
}
);
rockChoice.addEventListener("mouseup" , function (e){
    rockChoice.classList.remove("pressed");
}
);
paperChoice.addEventListener("mousedown" , function (e){
    paperChoice.classList.add("pressed");
}
);
paperChoice.addEventListener("mouseup" , function (e){
    paperChoice.classList.remove("pressed");
}
);
scissorChoice.addEventListener("mousedown" , function (e){
    scissorChoice.classList.add("pressed");
}
);
scissorChoice.addEventListener("mouseup" , function (e){
    scissorChoice.classList.remove("pressed");
}
);

resultHead.addEventListener("mousedown" , function (e){
    resultHead.classList.add("pressed");
}
);
resultHead.addEventListener("mouseup" , function (e){
    resultHead.classList.remove("pressed");
}
);

window.addEventListener("keyup",function (e){
    if(e.keyCode === 13){
        subHead.setAttribute("style","animation: enlarge-fade-out .5s ease;  animation-fill-mode: forwards;  ");
        setTimeout(function(){ subHead.setAttribute("style","display:none"); }, 500);
        resultHead.setAttribute("style","display:flex");
        resultHead.textContent = "Make your Play";
        setTimeout(gameplay.setAttribute("style","display:block"),1000);
        playSelection.setAttribute("style","display:flex");
        displayChoiceDiv.setAttribute("style","display:flex");
        gameScore.setAttribute("style","display:flex");
    }
});

function displayChoice(choice){
    if(choice == "rock"){
        const playerChoice = document.getElementById("displayPlayerChoice");
        const playerSignClassName = `fa-hand-${"rock"}`;
        playerChoice.classList =  `fas ${playerSignClassName} active`;
    }
    else if(choice == "paper"){
        const playerChoice = document.getElementById("displayPlayerChoice");
        const playerSignClassName = `fa-hand-${"paper"}`;
        playerChoice.classList =  `fas ${playerSignClassName} active`;
    }
    else if(choice == "scissor"){
        const playerChoice = document.getElementById("displayPlayerChoice");
        const playerSignClassName = `fa-hand-${"scissors"}`;
        playerChoice.classList =  `fas ${playerSignClassName} active`;
    }
}

function displayCompChoice(compChoice){
    if(compChoice == "rock"){
        const computerChoice = document.getElementById("displayCompChoice");
        const computerSignClassName = `fa-hand-${"rock"}`;
        computerChoice.classList =  `fas ${computerSignClassName} active`;
    }
    else if(compChoice == "paper"){
        const computerChoice = document.getElementById("displayCompChoice");
        const computerSignClassName = `fa-hand-${"paper"}`;
        computerChoice.classList =  `fas ${computerSignClassName} active`;
    }
    else if(compChoice == "scissor"){
        const computerChoice = document.getElementById("displayCompChoice");
        const computerSignClassName = `fa-hand-${"scissors"}`;
        computerChoice.classList =  `fas ${computerSignClassName} active`;
    }



};

function updateScore(result){

    if(result == "You Won"){
        playerScoreNumber ++;
    }
    else if(result == "You Lost"){
        compScoreNumber ++;
    };
};

function updateScoreDisplay(){
    playerScoreNumberString.textContent = playerScoreNumber.toString();
    compScoreNumberString.textContent = compScoreNumber.toString();
};


function resetGame(limit){
    if (playerScoreNumber > limit|| compScoreNumber > limit){
        wait(200);
        resultHead.setAttribute("style","display:flex");
        console.log("end");
        if(playerScoreNumber > compScoreNumber){
            resultHead.textContent = "You Won !";
        }
        else if(playerScoreNumber < compScoreNumber){
            resultHead.textContent = "You Lost !";
        }
        playerScoreNumber = 0;
        compScoreNumber = 0;
        updateScoreDisplay();
        playSelection.setAttribute("style","display:none");
        displayChoiceDiv.setAttribute("style","display:none");
        gameScore.setAttribute("style","display:none");
        setTimeout(function (){
            resultHead.textContent = "Click here to Play Again";}
            ,1000);
    };

}

function choiceSelected(choice){
    compChoice = computerPlay();
    displayChoice(choice);
    displayCompChoice(compChoice);
    let result = playRound(choice,compChoice);
    updateScore(result);
    //console.log(result);
    //console.log(playerScoreNumber);
    //console.log(compScoreNumber);
    updateScoreDisplay();
    resetGame(5);
}

function resetDom(){
    resultHead.setAttribute("style","display:none");
    subHead.setAttribute("style","display:block");
}