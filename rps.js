/*
    Rock,Paper,Scissors Game
    Edward Alexander Munoz
*/

//initalizing all variables needed
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

//randomizes computer choices
function computerPlay()
{
    const choices = ["rock","paper","scissors"];
    let random = [Math.floor(Math.random() * 3)];
    computerChoices = choices[random];
    return computerChoices;
}

//compares computer to user input
function playRound(playerSelection,computerSelection)
    {
        //playerSelection = playerPlay();
        //computerSelection = computerPlay();

        if(playerSelection == 'rock' && computerSelection == 'scissors')
        {
            playerScore++;
            alert("You won this round! R > S");
        }
        else if(playerSelection == 'paper' && computerSelection == 'rock')
        {
            playerScore++;
            alert("You won this round! P > R");
        }
        else if(playerSelection == 'scissors' && computerSelection == 'paper')
        {
            playerScore++;
            alert("You won this round! S > P");
        }
        else if(computerSelection == 'rock' && playerSelection == 'scissors')
        {
            computerScore++;
            alert("You lost. R > S");
        }
        else if (computerSelection == 'paper' && playerSelection == 'rock')
        {
            computerScore++;
            alert("You lost. P > R ");
        }
        else if(computerSelection == 'scissors' && playerSelection == 'paper')
        {
            computerScore++;
            alert("You lost. S > P");
        }
        else
        {
            alert("it's a tie");
        }
    }



function game()
{
   while((playerScore < 5) && (computerScore < 5))
   {
        playRound();
        console.log("You have " + playerScore + "points.");
        console.log("The computer has " + computerScore + "points.");

        if(playerScore == 5 && computerScore == 5)
        {
                alert("It's a tie!");
        }
        else if(computerScore == 5)
        {
            alert("The computer won!");
        }
        else if(playerScore == 5)
        {
            alert("You win!");
        }
        else
        {
            alert("error");
        }
    }
}



const buttons = document.querySelectorAll(".btn");
buttons.forEach(function(btn){
    btn.addEventListener("click", function(e){
        let playerSelection = e.target.id;
        let computerSelection = computerPlay();
    });
});


const results =  document.querySelector("#result");
const resultDiv = document.createElement("div");
results.append(resultDiv);

const playerTotal = document.getElementById("#playerTotal");
const computerTotal = document.getElementById("#computerTotal");
const finalTotal = document.getElementById("#finalTotal");