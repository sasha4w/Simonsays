import * as Utils from './../../assets/utils.js';

Utils.loadSessionFromLocalStorage();
Utils.updateUI();
document.addEventListener("DOMContentLoaded", function () {
  let clickCount = 0;
  let requiredClicks;
  let countdown = 8;
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = countdown;
  let countdownInterval;
  
  // Fonction pour démarrer le jeu
  function startGame() {
  // Réinitialiser le jeu
  clickCount = 0;
  requiredClicks = Math.floor(Math.random() * 35) + 5;
  document.getElementById("clickCount").innerText = clickCount;
document.getElementById(
  "instructions"
).innerText = `Vous devez cliquer ${requiredClicks} fois pour gagner.`;
document.getElementById("result").innerText = "";

// Démarrez le compte à rebours
countdownInterval = setInterval(() => {
  countdown--;
  countdownElement.innerHTML = countdown;

  if (countdown === 0) {
    clearInterval(countdownInterval);
    endGame(false); // Vous avez perdu si le temps est écoulé
    document.getElementById("clickButton").disabled = true;
  }
}, 800);
}

// Fonction pour gérer le clic sur le bouton
function handleClick() {
clickCount++;
document.getElementById("clickCount").innerText = clickCount;
if (clickCount >= requiredClicks) {
  endGame(true);
}
}

// Fonction pour terminer le jeu
function endGame(victory) {
  clearInterval(countdownInterval); // Arrête le compte à rebours

  if (victory) {
      document.getElementById("result").innerText = "Vous avez gagné!";
      Utils.addToScore(10);

  } else {
      document.getElementById("result").innerText = "Vous avez perdu.";
      Utils.loseLife();


  }

  document.getElementById("clickButton").disabled = true;

  // Redirection automatique après 3 secondes
  if(Utils.sessionData.lives == 0){
    Utils.gameOver();
  }
  setTimeout(() => {
      window.location.href = Utils.getRandomPath();
  }, 3000);
}

// Appeler startGame() au chargement du document pour démarrer automatiquement le jeu
startGame();

// Écouteur de clic pour chaque clic sur le bouton
document.getElementById("clickButton").addEventListener("click", handleClick);
});
