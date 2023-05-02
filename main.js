function round(playerChoice,compChoice){
    playerChoice = convertToNum(playerChoice);
    if (playerChoice == 0 && compChoice == 2){
        console.log("You win because " + convertToWord(playerChoice) + 
                            " beats " + convertToWord(compChoice) + ".");
    }
    else if (playerChoice==compChoice){
        console.log("It's a tie.");
    }
    else if (playerChoice>compChoice){
        console.log("You win because " + convertToWord(playerChoice) + 
                            " beats " + convertToWord(compChoice) + ".");
    }
    else{
        console.log("You lose because " + convertToWord(compChoice) + 
        " beats " + convertToWord(playerChoice) + ".");
    }
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