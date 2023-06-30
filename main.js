function round(playerChoice){
    playerChoice = playerChoice.target.className; //sets player choice to selected button class
    let compChoice = getCompChoice();
    playerChoice = convertToNum(playerChoice);
    if (playerChoice == 0 && compChoice == 2){
        console.log("You win because " + convertToWord(playerChoice) + 
                        " beats " + convertToWord(compChoice) + ".");
        return 1;
    }
    else if (playerChoice == 2 && compChoice == 0){
        console.log("You lose because " + convertToWord(compChoice) + 
                        " beats " + convertToWord(playerChoice) + ".");
        return 0;        
    }
    else if (playerChoice==compChoice){
        console.log("It's a tie.");
        return 0;
    }
    else if (playerChoice>compChoice){
        console.log("You win because " + convertToWord(playerChoice) + 
                        " beats " + convertToWord(compChoice) + ".");
        return 1;
    }
    else{
        console.log("You lose because " + convertToWord(compChoice) + 
                        " beats " + convertToWord(playerChoice) + ".");
        return 0;
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

function getCompChoice(){
    return Math.floor(Math.random()*3);
}

/*function game(){
    let gameCounter = 0;
    let playerWin = 0;
    while (gameCounter < 5){
        let validChoice = false;
        let playerChoice;
        while (validChoice == false){
            playerChoice = window.prompt("Type rock, paper or scissor to choose your option.")
            playerChoice = playerChoice.toLowerCase();
            validChoice = checkValidChoice(playerChoice);
        }
        let compChoice = getCompChoice();
        console.log("player: " + playerChoice + "\ncomputer: " + convertToWord(compChoice));
        playerWin += round(playerChoice,compChoice);
        gameCounter++;
    }

    console.log(`You won ${playerWin} times!`);
}*/


const btns = document.querySelectorAll('button');

btns.forEach(btn => btn.addEventListener('click', round));

