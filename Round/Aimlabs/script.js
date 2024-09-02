import * as Utils from '../../assets/utils.js';

document.addEventListener("DOMContentLoaded", function () {
  Utils.loadSessionFromLocalStorage();
  Utils.updateUI();
  
  let score = 0;
  const targetContainer = document.getElementById('targetContainer');
  const scoreDisplay = document.getElementById('scoreDisplay');
  const livesCount = document.getElementById('livesCount');
  livesCount.innerHTML = Utils.sessionData.lives;

  // Génère des cibles aléatoires
  function generateTargets() {
    targetContainer.innerHTML = ''; // Vide le conteneur de cibles existantes
    const targetCount = Math.floor(Math.random() * 9) + 1; // Génère entre 1 et 9 cibles

    for (let i = 0; i < targetCount; i++) {
      const target = document.createElement('div');
      target.classList.add('target');
      target.dataset.index = i; // Assigner un index à chaque cible
      target.addEventListener('click', () => handleTargetClick(i));
      targetContainer.appendChild(target);
    }
  }

  // Gère le clic sur une cible
  function handleTargetClick(index) {
    const randomIndex = Math.floor(Math.random() * 10); // Génère un index aléatoire entre 0 et 9
    if (index === randomIndex) {
      score += 1;
      scoreDisplay.innerHTML = score;
      document.getElementById('result').innerHTML = "Victoire !";
      Utils.addToScore(10);
    } else {
      document.getElementById('result').innerHTML = "Perdu !";
      Utils.loseLife();
      livesCount.innerHTML = Utils.sessionData.lives;
      if (Utils.sessionData.lives === 0) {
        Utils.gameOver();
        return;
      }
    }
    setTimeout(generateTargets, 1000); // Régénère les cibles après 1 seconde
  }

  generateTargets();

  let countdown = 8;
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = countdown;

  const countdownInterval = setInterval(() => {
    countdown--;
    countdownElement.innerHTML = countdown;

    if (countdown === 0) {
      clearInterval(countdownInterval);
      Utils.gameOver();
    }
  }, 1000);
});
