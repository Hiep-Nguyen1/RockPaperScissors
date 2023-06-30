function round(playerChoice){

    playerChoice = playerChoice.target.className; //sets player choice to selected button class
    let compChoice = getCompChoice();
    playerChoice = convertToNum(playerChoice);

    if (playerChoice == 0 && compChoice == 2){ //compares number values to check who wins. 0 = rock, 1 = paper, 2 = scissor

        result.textContent = "You win because " + convertToWord(playerChoice) + 
                        " beats " + convertToWord(compChoice) + ".";
        playerWin++;
    }
    else if (playerChoice == 2 && compChoice == 0){
        result.textContent = "You lose because " + convertToWord(compChoice) + 
                        " beats " + convertToWord(playerChoice) + ".";
        compWin++;        
    }
    else if (playerChoice==compChoice){
        result.textContent = "It's a tie.";
    }
    else if (playerChoice>compChoice){
        result.textContent = "You win because " + convertToWord(playerChoice) + 
                        " beats " + convertToWord(compChoice) + "."
        playerWin++;
    }
    else{
        result.textContent = "You lose because " + convertToWord(compChoice) + 
                        " beats " + convertToWord(playerChoice) + "."
        compWin++;
    }

    playerScore.textContent = playerWin;
    compScore.textContent = compWin;

    if(playerWin >=5 || compWin >=5){
        gameEnd();
    }

    return 0;
}

function convertToNum(choice){
    switch(choice){
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissor":
            return 2;
        default:
            console.log("Error, choice could not be converted");
    }
}

function convertToWord(choice){
    switch(choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
        default:
            console.log("Error, choice could not be converted");
    }
}

function getCompChoice(){
    return Math.floor(Math.random()*3);
}

function resetGame(event) {
    playerWin=0;
    compWin=0;
    playerScore.textContent = playerWin;
    compScore.textContent = compWin;
    result.textContent = "";
    btns.forEach(btn => btn.addEventListener('click',round));
    resultContainer.removeChild(tryAgain);
}

function gameEnd(){
    btns.forEach(btn => btn.removeEventListener('click', round));

    if (playerWin >=5){
        result.textContent = "Congratulations!! You beat the computer to 5, would you like to play again?";
    }
    else if(compWin >=5){
        result.textContent = "The computer beat you to 5. Would you like to try again?";
    }    

    resultContainer.appendChild(tryAgain);
    tryAgain.addEventListener('click',resetGame,{once:true});
}

const btns = document.querySelectorAll('.playerChoice > button');

btns.forEach(btn => btn.addEventListener('click', round));

let playerWin = 0;
let compWin = 0;
const result = document.querySelector('.result');
const playerScore = document.querySelector('.player > .score');
const compScore = document.querySelector('.computer > .score');
const tryAgain = document.createElement('button');
tryAgain.textContent = "Try Again?";
const resultContainer = document.querySelector('.resultContainer');