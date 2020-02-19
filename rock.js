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
function singleRound(playerChoice,computerChoice)
    {
        let playerSelection = prompt("rock, paper, or scissors?");
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
                alert("error.")
            }
        }

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

    function game()
    {
            singleRound();
            singleRound();
            singleRound();
            singleRound();
            singleRound();
            score();
    }

//singleRound();
game();
console.log("Player Score: " + playerScore);
console.log("Computer Score: " + computerScore);
//console.log(computerPlay());


