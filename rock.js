/*
    Rock,Paper,Scissors Game
    Edward Alexander Munoz
*/
    let playerScore = 0;
    let computerScore = 0;
    let pointsToWin = 0;

    const playerTotal = document.getElementById("#playerTotal");
    const computerTotal = document.getElementById("#computerTotal");
    const finalTotal = document.getElementById("#finalTotal");

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
                return "win";
            }
        else if(playerSelection === "scissors" && computerSelection === "rock"
        || playerSelection === "paper" && computerSelection === "scissors"
        || playerSelection === "rock" && computerSelection === "paper")
            {
                return "lose";
            }
        else if(playerSelection == computerSelection)
            {
                return "tie";
            }
    }

        function score()
        {
            const roundResults = document.getElementById("roundResults");
            const playerTotal = document.getElementById("playerTotal");
            const computerTotal = document.getElementById("computerTotal");
            const finalTotal = document.getElementById("finalTotal");

            finalTotal.textContent = "";

            roundResults.textContent = resultMsg;
            playerTotal.textContent = "Player Score: " + playerScore;
            computerTotal.textContent = "Computer Score: " + computerScore;

            if(playerScore === 5)
            {
                finalTotal.textContent = `You win! You beat the computer ${playerScore} to ${computerScore}!`;
                playerScore = 0;
                computerScore = 0;
            }
            else if(computerScore === 5)
            {
                finalTotal.textContent = `You lost! The computer beat you ${computerScore} to ${playerScore}`;
                playerScore = 0;
                computerScore = 0;
            }

        }

    const rockButton = document.querySelector("#rock");
        rockButton.addEventListener("click", (e) =>
        {
            singleRound(rockButton.id);
            if(singleRound(rockButton.id) === "win")
            {
                playerScore++;
                resultMsg = `You win! ${rockButton.id} beats ${computerPlay()}`;
                score();
            }
            else if(singleRound(rockButton.id) === "lose")
            {
                computerScore++;
                resultMsg = `You lose! ${computerPlay()} beats ${rockButton.id}`;
                score();
            }
            else
            {
                resultMsg = `It's a draw. ${rockButton.id} ties ${computerPlay()}`;
                score();
            }
        });


    const paperButton = document.querySelector("#paper");
        paperButton.addEventListener("click", (e) =>
        {
            singleRound(paperButton.id);
            if(singleRound(paperButton.id) === "win")
            {
                playerScore++;
                resultMsg = `You win! ${paperButton.id} beats ${computerPlay()}`;
                score();
            }
            else if(singleRound(paperButton.id) === "lose")
            {
                computerScore++;
                resultMsg = `You lose! ${computerPlay()} beats ${paperButton.id}`;
                score();
            }
            else
            {
                resultMsg = `It's a draw. ${paperButton.id} ties ${computerPlay()}`;
                score();
            }
        });


    const scissorButton = document.querySelector("#scissors")
        scissorButton.addEventListener("click", (e) =>
        {
            singleRound(scissorButton.id);
            if(singleRound(scissorButton.id) === "win")
        {
            playerScore++;
            resultMsg = `You win! ${scissorButton.id} beats ${computerPlay()}`;
            score();
        }
        else if(singleRound(scissorButton.id) === "lose" )
        {
            computerScore++;
            resultMsg = `You lose! ${computerPlay()} beats ${scissorButton.id}`;
            score();
        }
        else
        {
            resultMsg = `It's a draw. ${scissorButton.id} ties ${computerPlay()}`;
            score();
        }
        });


//main();

//console.log("Player Score: " + playerScore); // shows player score
//console.log("Computer Score: " + computerScore); // shows computer score


