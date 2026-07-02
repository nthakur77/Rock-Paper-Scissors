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

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissor = document.querySelector('#scissor');

rock.addEventListener('click', () =>{
    playGame('rock')
})

paper.addEventListener('click', () =>{
    playGame('paper');
})

scissor.addEventListener('click', () =>{
    playGame('scissor');
})


function playGame(humanChoice){
    if (humanScore >= 5 || computerScore >= 5) {
        return;
    }

    playRound(humanChoice, getComputerChoice());

    document.querySelector('.playerScore').textContent = humanScore;
    document.querySelector('.computerScore').textContent = computerScore;
    
    if(humanScore >= 5 || computerScore >= 5){
        let winner = "";

        if(humanScore > computerScore){
            winner = "human"; 
        }else if(humanScore < computerScore){
            winner = "computer";
        }else {
            winner = "tie";
        }

        let winnerDiv = document.querySelector('.winner');
        winnerDiv.textContent = winner;
        let btn = document.createElement('button');

        btn.textContent = "replay";

        winnerDiv.appendChild(btn);

        btn.addEventListener('click', () => {
            humanScore = 0;
            computerScore = 0;
            document.querySelector('.playerScore').textContent = humanScore;
            document.querySelector('.computerScore').textContent = computerScore;
            winnerDiv.textContent = ""; // Clears the winner text and the replay button
        })
    }

}
