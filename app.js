const num = document.querySelector("#number");
const maxNum = Number(num.getAttribute("max"));
const minNum = Number(num.getAttribute("min"));
const enter = document.querySelector("#enter");
const againButton = document.createElement('button');
const buttonBlock = document.querySelector(".button-block");
let randomNum = Math.ceil(Math.random()*100);
let attempts = -1;
let userNum = 0;


function innerHTML(id, str) {
  document.getElementById(id).innerHTML = str;
}

function showAttempts() {
  attempts += 1;
  innerHTML("attempts", attempts);
}


function startWindow() {
  enterDisable("off");
  innerHTML("prompts", "Guess the number!");
  showAttempts();
}

function attemptsHandler(attmpts, userNum) {
  if(attmpts < 10) {
    if(userNum > randomNum) {
      innerHTML("prompts", "Your number is higher");
    } else {
      innerHTML("prompts", "Your number is lower");
    }
  } else {
    endGame("You are losed");
  }
}

function endGame(str) {
  innerHTML("prompts", str);
  enterDisable("on");
  showAgainButton();
}

function startGame() {
  let userNum = document.getElementById("number").value;
  if(userNum > maxNum || userNum < minNum) {
    innerHTML("prompts", "Out of range");
  } else {
    showAttempts();
    if(userNum != randomNum) {
      if(attemptsHandler(attempts, userNum));
    } else {
      endGame("You win!");
    }
  }
}

function showAgainButton() {
  againButton.innerText = "Again";
  againButton.setAttribute("id", "again-button");
  buttonBlock.appendChild(againButton);
}

function enterDisable(state) {
  if(state == "on") {
    document.getElementById("enter").disabled = true;
    document.getElementById("enter").style.opacity = "0.4";
    document.getElementById("enter").style.cursor = "default";
  } else if(state == "off") {
    document.getElementById("enter").disabled = false;
    document.getElementById("enter").style.opacity = "1";
    document.getElementById("enter").style.cursor = "pointer";
  }
}

function restartGame() {
  buttonBlock.removeChild(againButton);
  attempts = -1;
  randomNum = Math.ceil(Math.random()*100);
  document.getElementById("number").value = "";
  startWindow();
}

startWindow();

enter.addEventListener("click", function(e) {
  startGame();
});


againButton.addEventListener("click", function(e) {
  restartGame();
});