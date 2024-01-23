let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");







const genCompChoice =() =>{
    //rock paper scissors
    const options = ["rock","paper","scissors"];
   const randIdx =  Math.floor(Math.random()*3);
   return options[randIdx];


}

const drawGame = () =>{
    console.log("Game Draw");
    msg.innerText = "Draw Game Play Again!";
    msg.style.backgroundColor ="#1b60ae";


}

    const showWinner = (userWin , userChoice , compChoice) => {
      
      
        if(userWin){
            userScore++;
            userScorePara.innerText = userScore;
            console.log("you win!!");
            msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor ="green";
           
        }else{

            compScore++;
            compScorePara.innerText = compScore;

            console.log("you lose!!!");
            msg.innerText = `You Lose!! ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor ="red";
               

        }
    }


const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Genrated computer choice 
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);

    //Draw Game
    if (userChoice === compChoice){
          drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissors,paper
            userWin = compChoice ==="paper"  ? false:true;
        }else if (userChoice === "paper"){
            // rock,scissors
            userWin = compChoice === "scissors" ? false:true;
        } else{
            //rock,paper
            userWin = compChoice === "rock" ? false:true;
        }

        showWinner(userWin , userChoice , compChoice);
    }
}


choices.forEach((choice) => {
    // console.log(choice);

    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
       // console.log(" Choice was Clicked" , userChoice);

       playGame(userChoice);

    })

    
})