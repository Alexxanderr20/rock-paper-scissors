/*
    Rock,Paper,Scissors Game
    Edward Alexander Munoz
*/

let playerScore = 0;
let computerScore = 0;

//randomizes computer choices
function computerPlay()
{
    const computerChoices = ["rock","paper","scissors"];
    let computerSelection = computerChoices[Math.floor(Math.random() * 3)];
    return computerSelection;
}

//compares computer to user input
function singleRound(playerSelection)
    {
        //let playerSelection =  buttons;
        let computerSelection = computerPlay();

        if(playerSelection === "rock" && computerSelection == "scissors"
        || playerSelection == "paper" && computerSelection == "rock"
        || playerSelection == "scissors" && computerSelection == "paper")
            {
                console.log("You win! " + playerSelection + " beats " + computerSelection);
                playerScore++;
            }
        else if(playerSelection === "scissors" && computerSelection === "rock"
        || playerSelection === "paper" && computerSelection === "scissors"
        || playerSelection === "rock" && computerSelection === "paper")
            {
                console.log("You lose. " + computerSelection + " beats " + playerSelection);
                computerScore++;
            }
        else if(playerSelection == computerSelection)
            {
                console.log("Tie!");
            }
            else
            {
                console.log("error.");
            }
        }

        // counts up total score from game and determines winner
    function score()
    {
        if (playerScore > computerScore)
            {
                console.log("YOU WINNNNN");
            }
        else if(computerScore > playerScore)
            {
                console.log("you lost.");
            }
            else
            {
                console.log("it's a tie.");
            }
    }

    //loops through singleRound function 5 times
    function game()
    {
            singleRound();
            singleRound();
            singleRound();
            singleRound();
            singleRound();
            score();
    }


    /*
        const buttons = document.querySelectorAll("button");

        buttons.forEach((button) => {
            button.addEventListener("click", (e) =>
            {
                //let playerSelection = (button.id);
                singleRound(button.id);
            });

        });
*/


    const rockButton = document.querySelector("#rock");
        rockButton.addEventListener("click", (e) =>
        {
            singleRound(rockButton.id);
        });

    const paperButton = document.querySelector("#paper");
        paperButton.addEventListener("click", (e) =>
        {
            singleRound(paperButton.id);
        });

    const scissorButton = document.querySelector("#scissors")
        scissorButton.addEventListener("click", (e) =>
        {
            singleRound(scissorButton.id);
        });

/*
    const buttons = document.querySelectorAll("button");
        buttons.forEach((buttons) =>
        {
            buttons.addEventListener("click", (e) => {
                singleRound(buttons.id);
            });
        });

*/

//singleRound();
//game();
console.log("Player Score: " + playerScore); // shows player score
console.log("Computer Score: " + computerScore); // shows computer score
//console.log(buttons);
//console.log(computerPlay());


