let boredom; // integer
let hunger; // integer
let sleepiness; // integer

let timer; // object
let interval; // integer
let score = 0;

const boredomStatEl = document.querySelector("#boredom-stat");
const hungerStatEl = document.querySelector("#hunger-stat");
const sleepyStatEl = document.querySelector("#sleepiness-stat");

const hungerMessage = document.querySelector("#hunger-message");
const boredMessage = document.querySelector("#bored-message");
const sleepyMessage = document.querySelector("#sleepy-message");

const game_btns = document.querySelectorAll("button");
const img = document.querySelectorAll("button");

const gamePlayAgainEl = document.querySelector("#restart");
game_btns.forEach((btn) => btn.addEventListener("click", handleBtnClick));
gamePlayAgainEl.addEventListener("click", init);

const INIT_STATE = {
    points: 0,
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
};


function updateScore_plus() {
    document.getElementById("scoreDisplay").innerText = "Points: " + score;
}
/* Displays score warning when score is less than 3 */
function updateScore_minus() {
    if (score == 0 || score < 3) {
        var scoreAlert = document.getElementById("scoreAlert");
        scoreAlert.style.display = "block";
        setTimeout(function() {
        scoreAlert.style.display = "none";
        }, 3000);
      }
    else{
        score -= 3;
        document.getElementById("scoreDisplay").innerText = "Points: " + score;
    }
}
const buttons = document.querySelectorAll('.img_btn');
buttons.forEach(button => {
    button.addEventListener('click', updateScore_minus);    
  });
const food = document.getElementById("hungry");
food.addEventListener('click', closeHungerMessage); 
const play = document.getElementById("bored");
play.addEventListener('click', closeBoredMessage);
const sleep = document.getElementById("sleepy");
sleep.addEventListener('click', closeSleepMessage); 


/* Opens info block when question mark icon is clicked*/
  function showAlert() {
    var alertBanner = document.getElementById("myAlert");
    alertBanner.innerHTML = "How to get points?🤔 Its simple!<br>1. Make payments to your credit card. It is crucial to be on time with your payments to prevent your credit score from deceasing. <br> 2. Maintain a credit balance below 30% at the end of every month. Lowering your credit utilization ratio helps improve your credit score. <br>3. Read some of our articles, watch some of our lessons and play our trivia game! There is always new things to learn about yoru credit. Therefore, staying informed is vital for your credit score growth.";
    alertBanner.style.display = "block";
    // Hide the alert after a few seconds (adjust the time as needed)
    setTimeout(function() {
      alertBanner.style.display = "none";
    }, 10000); 
}

  setTimeout(function() {
    var payButton = document.getElementById("myPay");
    payButton.style.display = "block";
    score += 5;

    // Update the score display
    updateScore_plus();
  }, 3000);
  setTimeout(function() {
    var payButton = document.getElementById("myPay");
    payButton.style.display = "block";
    score += 5;

    // Update the score display
    updateScore_plus();
  }, 7000);

/* if action buttons are clicked status decreases */
function handleBtnClick(e) {
    const convertProp = {
      feed: "hunger",
      sleep: "sleepiness",
      play: "boredom",
    };
    
    const btnText = convertProp[e.target.innerText];
    const newValue = -3
  
    updateStat(btnText, newValue);
    render();
  }

// Initialize all state, then call render()
function init() {
    resetUI();
    state = { ...INIT_STATE }; // create a copy of the default data

  interval = 3000; // integer
  timer = setInterval(runGame, interval); // object

  render();
}
function render() {
    renderStats();
    // Icebox - add conditional animations function call
  }
function renderStats() {
    boredomStatEl.textContent = state.boredom;
    hungerStatEl.textContent = state.hunger;
    sleepyStatEl.textContent = state.sleepiness;
  
}
function runGame() {
    if (continueGame()) {
      updateStats();
      if (state.hunger % 5  == 0) {
        showHungerMessage();
      }
      else if (state.boredom % 4 == 0) {
        showBoredMessage();
      }
      else if (state.sleepiness % 3 == 0) {
        showSleepyMessage();
      }
    }
  
    render();
  }

/* Show/hide message based on pets needs */
  function closeHungerMessage(){
    if (score + 3 >= 3) {
    hungerMessage.classList.add("hidden");
    }
  }
  function closeSleepMessage(){
    if (score + 3 >= 3) {
    sleepyMessage.classList.add("hidden");
    }
  }
  function closeBoredMessage(){
    if (score + 3 >= 3) {
    boredMessage.classList.add("hidden");
    }
  }
  function showHungerMessage() {
    hungerMessage.classList.remove("hidden");
  }
  function showBoredMessage() {
    boredMessage.classList.remove("hidden");
  }
  function showSleepyMessage() {
    sleepyMessage.classList.remove("hidden");

  }
  
  function updateStats() {
    for (key in state) {
      updateStat(key, Math.floor(Math.random() * 3));
    }
  }
  function updateStat(stat, value) {
    // normalize data to prevent state values less than 0
    if (state[stat] + value >= 0) {
      state[stat] += value;
    }
    else {
      state[stat] = 0;
    }
  }
  function continueGame() {
    const testGame = Object.values(state).every((stat) => stat < 10);
    return testGame;
  }  

  function gameOver() {
    // alert player game over
    gamePlayAgainEl.classList.remove("hidden");
    gameMessageEl.classList.remove("hidden");
    // stop timer
    clearInterval(timer);
  }
  function resetUI() {
    gamePlayAgainEl.classList.add("hidden");
  }
  init();
