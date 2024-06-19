import * as Utils from './../../assets/utils.js';

Utils.loadSessionFromLocalStorage();
Utils.updateUI();
document.addEventListener("DOMContentLoaded", function () {
  const shouldSucceed = () => Math.random() < 0.25;
  if (shouldSucceed()) {
    simonSaysText.innerHTML = "Jacque n'a pas dit parle";
} else {
    simonSaysText.innerHTML = "Jacque a dit parle";
}
  // Voicheck
  // Vérification de la compatibilité du navigateur
  if (!("webkitSpeechRecognition" in window)) {
    alert(
      "Votre navigateur ne supporte pas l'API Web Speech. Essayez avec Google Chrome."
    );
  } else {
    // Initialisation de la reconnaissance vocale
    const recognition = new webkitSpeechRecognition();
    recognition.lang = "fr-FR"; // Définir la langue à français
    recognition.continuous = false; // Mode non continu (arrêt après la première reconnaissance)
    recognition.interimResults = false; // Pas de résultats intermédiaires

    const startButton = document.getElementById("start");
    const resultParagraph = document.getElementById("result");

    startButton.addEventListener("click", () => {
      recognition.start();
      resultParagraph.textContent = "Écoute en cours...";
    });

    recognition.onresult = (event) => {
      // Vérifie si quelque chose a été dit
      if (( simonSaysText.innerHTML === "Jacque n'a pas dit parle" && event.results.length == 0) || ( simonSaysText.innerHTML === "Jacque a dit parle" && event.results.length > 0)) {
        
        resultParagraph.textContent = `Victoire !`;
        Utils.addToScore(10);

      } else {
        resultParagraph.textContent = "Défaite !";
        Utils.loseLife();
      }
      if (Utils.sessionData.lives === 0) {
        Utils.gameOver();
      }
      setTimeout(() => {
          window.location.href = Utils.getRandomPath();
      }, 3000);
    };

    recognition.onspeechend = () => {
      recognition.stop();
    };

    recognition.onerror = (event) => {
      resultParagraph.textContent = `Erreur de reconnaissance vocale : ${event.error}`;
    };

    recognition.onend = () => {
      if (resultParagraph.textContent === "Écoute en cours...") {
        resultParagraph.textContent = "Défaite ! Vous n'avez rien dit.";
      }
    };
  }
  // Chrono
  let countdown = 8;
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = countdown;

  const countdownInterval = setInterval(() => {
    countdown--;
    countdownElement.innerHTML = countdown;

    if (countdown === 0) {
      clearInterval(countdownInterval);
      if (!isSubmitted) {
        isCorrect();
      }
      document.getElementById("word1").disabled = true;
      document.getElementById("submitBtn").disabled = true; // Masquer le bouton
    }
  }, 800);
});
