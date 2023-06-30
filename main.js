function round(playerChoice){

    playerChoice = playerChoice.target.className; //sets player choice to selected button class
    let compChoice = getCompChoice();
    playerChoice = convertToNum(playerChoice);

    if (playerChoice == 0 && compChoice == 2){ //compares number values to check who wins. 0 = rock, 1 = paper, 2 = scissor
        console.log("You win because " + convertToWord(playerChoice) + 
                        " beats " + convertToWord(compChoice) + ".");
        playerWin++;
    }
    else if (playerChoice == 2 && compChoice == 0){
        console.log("You lose because " + convertToWord(compChoice) + 
                        " beats " + convertToWord(playerChoice) + ".");
        compWin++;        
    }
    else if (playerChoice==compChoice){
        console.log("It's a tie.");
    }
    else if (playerChoice>compChoice){
        console.log("You win because " + convertToWord(playerChoice) + 
                        " beats " + convertToWord(compChoice) + ".");
        playerWin++;
    }
    else{
        console.log("You lose because " + convertToWord(compChoice) + 
                        " beats " + convertToWord(playerChoice) + ".");
        compWin++;
    }

    console.log("Player Wins: " + playerWin);
    console.log("compWin Wins: " + compWin);

    if (playerWin >=5){
        console.log("Congratulations!! You won, would you like to play again?");
        playerWin = 0;
        compWin = 0;
    }
    else if(compWin >=5){
        console.log("The computer beat you to 5. Would you like to try again?");
        playerWin = 0;
        compWin = 0;
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

const btns = document.querySelectorAll('button');

btns.forEach(btn => btn.addEventListener('click', round));

let playerWin = 0;
let compWin = 0;