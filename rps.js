/*
    Rock,Paper,Scissors Game
    Edward Alexander Munoz
*/

let playerScore = 0;
let computerScore = 0;

const computerChoices = ["rock","paper","scissors"];

//randomizes computer choices
function computerPlay(computerChoices)
{
    return computerChoices[Math.floor(Math.random() * 3)];
}

//compares computer to user input
function singleRound(computerPlay)
    {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        playerSelection = playerSelection.toLowerCase();

        let computerSelection = computerPlay(computerChoices);

        if(computerSelection === playerSelection)
            {
                alert("Tie! Both you and the computer picked the same value.")
            }
        else if(playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper')
            {
                alert("You win!");
                playerScore++;
            }
        else
            {
                alert("You lost!");
                computerScore++;
            }
        }


// calls singleRound function five times
function game()
{
         singleRound(computerPlay);
         singleRound(computerPlay);
         singleRound(computerPlay);
         singleRound(computerPlay);
         singleRound(computerPlay);

}

game();

let computerScore = console.log("Computer: ", computerScore); // prints computer score
let playerScore = console.log("Player: ", playerScore); // prints player score



