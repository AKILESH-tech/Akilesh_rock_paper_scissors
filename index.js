let playerc = document.querySelector("#play");
let compc = document.getElementById("comp");
let resultc = document.getElementById("result");
let bttns= document.querySelectorAll(".btn");
let player;
let computer;
let results;

bttns.forEach(butto=>butto.addEventListener("click",()=>{
    player=butto.textContent;
    computeromputerTurn();
    playerc.textContent = `Player: ${player}`   ;
    compc.textContent = `Computer: ${computer}` ;
    resultc.textContent = checkWInner();
}));

function computeromputerTurn(){
   const rand = Math.floor(Math.random()*3)+1;
   switch(rand){
    case 1 : computer ="rock";
              break;
    case 2 : computer ="paper";
              break;
    case 3 : computer ="scissors";
              break;          

   }
}
function checkWInner()
{
    if(player==computer){
        return "Draw";
    }
    else if(computer=="rock"){
         return (player=="paper")? "You WIn" : "You Lose";
    }
    else if(computer=="paper"){
        return (player=="scissors")? "You WIn" : "You Lose";
   }
   else if (computer == "scissors") 
   {
    return (player=="rock")? "You WIn" : "You Lose";
}

        
}