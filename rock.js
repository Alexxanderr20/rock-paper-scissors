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
        let computerSelection = computerPlay();

        if(playerSelection === "rock" && computerSelection == "scissors"
        || playerSelection == "paper" && computerSelection == "rock"
        || playerSelection == "scissors" && computerSelection == "paper")
            {
                //console.log("You win! " + playerSelection + " beats " + computerSelection);
                const winMessage = document.querySelector("#win");
                {
                    const winText = document.createElement("p");

                    winText.classList.add("p");
                    winText.textContent = "You win! " + playerSelection + " beats " + computerSelection;

                    winMessage.appendChild(winText);
                }
                return playerScore++;
            }
        else if(playerSelection === "scissors" && computerSelection === "rock"
        || playerSelection === "paper" && computerSelection === "scissors"
        || playerSelection === "rock" && computerSelection === "paper")
            {
                //console.log("You lose. " + computerSelection + " beats " + playerSelection);
                const loseMessage = document.querySelector("#lose");
                        {
                            const loseText = document.createElement("p");

                            loseText.classList.add("p");
                            loseText.textContent = "You lose, " + computerSelection + " beats " + playerSelection;

                            loseMessage.appendChild(loseText);
                        }
                return computerScore++;
            }
        else if(playerSelection == computerSelection)
            {
                //console.log("Tie!");
                const tieMessage = document.querySelector("#lose");
                {
                    const tieText = document.createElement("p");

                    tieText.classList.add("p");
                    tieText.textContent = "Tie, " + computerSelection + " is the same as " + playerSelection;

                    tieMessage.appendChild(tieText);
                }

            }
            else
            {
                console.log("error");
            }
        }


    //loops through singleRound function 5 times
    function game(playerSelection)
    {
            singleRound(playerSelection);
            //singleRound(playerSelection);
            //singleRound(playerSelection);
            //singleRound(playerSelection);
            //singleRound(playerSelection);
            //score();
    }

function score(pScore, cScore)
{
        if (playerScore == 5)
            {
                console.log("YOU WINNNNN");
            }
        else if(computerScore == 5)
            {
                console.log("you loseeeeeeeeeeee.");
            }
            else
            {
                console.log("draw.");
            }
}

/*
function results(playerSelection,computerSelection)
{
    const winMessage = document.querySelector("#win");
    {
        const winText = document.createElement("p");

        winText.classList.add("p");
        winText.textContent = "You win! " + playerSelection + " beats " + computerSelection;

        winMessage.appendChild(winText);
    }
}
*/

function main(playerSelection,computerSelection)
{
    const rockButton = document.querySelector("#rock");
        rockButton.addEventListener("click", (e) =>
        {
            singleRound(rockButton.id);
            //results(playerSelection,computerSelection);
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

}


main();

//console.log("Player Score: " + playerScore); // shows player score
//console.log("Computer Score: " + computerScore); // shows computer score


