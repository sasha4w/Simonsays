import * as Utils from './../../assets/utils.js';

Utils.loadSessionFromLocalStorage();
Utils.updateUI();
document.addEventListener("DOMContentLoaded", function () {
  let clickCount = 0;
  let requiredClicks;
  let countdown = 6;
  const shouldSucceed = () => Math.random() < 0.25;
  if (shouldSucceed()) {
    simonSaysText.innerHTML = "Jacques n'a pas dit clique autant de fois demandé";
} else {
    simonSaysText.innerHTML = "Jacques a dit clique autant de fois demandé";
}
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = countdown;
  let countdownInterval;
  
  // Fonction pour démarrer le jeu
  function startGame() {
  // Réinitialiser le jeu
  clickCount = 0;
  requiredClicks = Math.floor(Math.random() * 25) + 5;
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
    endGame(); // Appel à endGame() lorsque le compte à rebours atteint zéro
  }
}, 800);

}

// Fonction pour gérer le clic sur le bouton
function handleClick() {
clickCount++;
document.getElementById("clickCount").innerText = clickCount;
}



// Fonction pour terminer le jeu
function endGame() {
  if ( ( simonSaysText.innerHTML === "Jacques n'a pas dit clique autant de fois demandé" && clickCount < requiredClicks) 
    || (simonSaysText.innerHTML === "Jacques a dit clique autant de fois demandé" && clickCount >= requiredClicks)) {
      clearInterval(countdownInterval); // Arrête le compte à rebours
      document.getElementById("result").innerText = "Gagné !";
      Utils.addToScore(10);
  }
 else {
      document.getElementById("result").innerText = "Perdu !";
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
