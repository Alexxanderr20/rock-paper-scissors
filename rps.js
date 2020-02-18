/*
    Rock,Paper,Scissors Game
    Edward Alexander Munoz
*/

let playerScore = 0;
let computerScore = 0;
const computerChoices = ["rock","paper","scissors"];

const buttons = document.querySelectorAll('btn');
const rockButton = document.getElementById('#rock-button');
const paperButton = document.getElementById('#paper-button');
const scissorsButton = document.getElementById('#scissors-button');

//randomizes computer choices
function computerPlay()
{
    let computerChoices = ["rock","paper","scissors"];
    return computerChoices[Math.floor(Math.random() * 3)];
}

//compares computer to user input
function playRound(computerPlay)
    {

        let playerSelection = e.target.id;
        let computerSelection = computerPlay();

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
