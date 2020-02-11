//Rock,Paper,Scissors Game
//let question = prompt("Want to play a game?");

const computerChoices = ["rock","paper","scissors"];

function computerPlay(computerChoices)
{
    return computerChoices[Math.floor(Math.random() * 3)];
}

function singleRound(computerPlay)
    {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        playerSelection = playerSelection.toLowerCase();

        let computerSelection = computerPlay(computerChoices);

        if(computerSelection === playerSelection)
            {
                alert("Tie! Both you and the computer picked the same value.")
                return "Tie";
            }
        else if(playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper')
            {
                alert("You win!");
                return "Dub";
            }
        else
            {
                alert("Loser");
                return "You lost";
            }
    }

singleRound(computerPlay)
