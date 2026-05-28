console.log("Hello")

function getComputerChoice(){
    let string = "";
    let n = Math.random() * 10;
    if(n <= 3){
        string = "rock";
    }else if(n <= 6){
        string = "paper";
    }else if(n <= 10){
        string = "scissor";
    }
    return string;
}


function getHumanChoice(){
    const input = prompt("What is your choice (rock, paper, or scissor)?");
    return input.toLowerCase();
}

// console.log(humanChoice);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    let h = humanChoice;
    let c = computerChoice;

    console.log(`You played: ${h} | Computer played: ${c}`);

    if(h === "rock"){
        if(c === "rock"){
            return;
        }
        if(c === "paper"){
            computerScore++;
            return;
        }
        if(c === "scissor"){
            humanScore++;
            return;
        }
    }
    if(h === "paper"){
        if(c === "rock"){
            humanScore++;
            return;
        }
        if(c === "paper"){
            return;
        }
        if(c === "scissor"){
            computerScore++;
            return;
        }
    }
    if(h == "scissor"){
        if(c === "rock"){
            computerScore++;
            return;
        }
        if(c === "paper"){
            humanScore++;
            return;
        }
        if(c === "scissor"){
            return;
        }
    }
}

function playGame(){
    humanScore = 0;
    computerScore = 0;

    for(let i = 0; i < 5; i++){
        console.log(`--- Round ${i + 1} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
    }

    let winner = "";

    if(humanScore > computerScore){
        winner = "human"; 
    }else if(humanScore < computerScore){
        winner = "computer";
    }else {
        winner = "tie";
    }

    console.log("=== GAME OVER ===");
    console.log(`Final Score -> You: ${humanScore} | Computer: ${computerScore}`);
    console.log(`The winner is: ${winner}!`);
}

playGame();