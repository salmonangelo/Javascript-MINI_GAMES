function play(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result ="";
 
    if(playerChoice===computerChoice){
     result= "IT'S A TIE";
    }
    else{
 
         
     switch(playerChoice){
         case "rock":
             result =(computerChoice==="scissor")?"YOU WIN":"YOU LOSE"; 
             break;
         case "paper":
             result =(computerChoice==="rock")?"YOU WIN":"YOU LOSE"; 
             break;
         case "scissor":
             result =(computerChoice==="paper")?"YOU WIN":"YOU LOSE"; 
             break;
     }
    }
 
    document.getElementById("playerChoice").textContent  = `PLAYER :${playerChoice}`;
    document.getElementById("computerChoice").textContent  = `COMPUTER :${computerChoice}`;
    document.getElementById("result").textContent   = result;       
 }