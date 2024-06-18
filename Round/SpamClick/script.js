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
clearInterval(countdownInterval);
if (victory) {
document.getElementById("result").innerText = "Vous avez gagné!";
} else {
document.getElementById("result").innerText = "Vous avez perdu.";
}
document.getElementById("clickButton").disabled = true;
}

// Appeler startGame() au chargement du document pour démarrer automatiquement le jeu
startGame();

// Écouteur de clic pour chaque clic sur le bouton
document.getElementById("clickButton").addEventListener("click", handleClick);
});
