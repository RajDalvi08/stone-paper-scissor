let navbar = document.querySelector(".navbar")
let container = document.querySelector(".container")
let boxes = document.querySelectorAll(".box")
let usrscore = document.querySelector(".user-score")
let compscor = document.querySelector("#comp-score")
let usrscore1 = document.querySelector(".user-score1")
let compscore1 = document.querySelector("#comp-score1")
let msg = document.querySelector(".msg")
let msgcontainer = document.querySelector("#msg-container")

let userscore = 0;
let compscore = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        const userchoice = box.getAttribute("id")
        playgame(userchoice);

    
    });
});

//compchoice
const generatecompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const matchdrawn = () => {
    console.log("Match was Drawn")
}

//userchoice
const playgame = (userchoice) => {
  console.log("user choice was clicked:",userchoice);
  const compchoice = generatecompchoice();
  console.log("Comp choice was clicked", compchoice);
if (userchoice === compchoice) {
    matchdrawn();
}
else{
    let userwin = true;
    if (userchoice === "rock") {
        userwin = compchoice === "paper" ? false : true;
    }
    else if (userchoice === "paper") {
        userwin = compchoice === "scissor" ? false : true;
    }
    else{
        compchoice === "rock" ? true : false;
    }
    showwinner(userwin);
}};

const showwinner = (userwin) => {
    if(userwin){
        userscore++;
        usrscore.innerText = userscore;
        usrscore1.innerText = "YOU"
        console.log("You win!");
        msgcontainer.innerText = "YOU WIN!"
        }
    else{
        compscore++;
        compscor.innerText = compscore;
        compscore1.innerText = "COMP"
        console.log("You lose Comp Wins!");
        msgcontainer.innerText = "YOU LOOSE COMP WINS!"
    }
}