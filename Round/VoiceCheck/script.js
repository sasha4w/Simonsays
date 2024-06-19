// Importation des utilitaires depuis utils.js
import * as Utils from './../../assets/utils.js';

document.addEventListener("DOMContentLoaded", function () {
  // Sélection de l'élément simonSaysText dans le DOM
  const simonSaysText = document.getElementById("simonSaysText");

  // Fonction pour déterminer si "Jacque a dit parle" ou "Jacque n'a pas dit parle"
  const shouldSucceed = () => Math.random() < 0.25;

  // Initialisation du texte selon le résultat de shouldSucceed
  if (shouldSucceed()) {
    simonSaysText.innerHTML = "Jacque n'a pas dit parle";
  } else {
    simonSaysText.innerHTML = "Jacque a dit parle";
  }

  // Vérification de la compatibilité du navigateur avec l'API Web Speech
  if (!("webkitSpeechRecognition" in window)) {
    alert("Votre navigateur ne supporte pas l'API Web Speech. Essayez avec Google Chrome.");
  } else {
    // Initialisation de la reconnaissance vocale
    const recognition = new webkitSpeechRecognition();
    recognition.lang = "fr-FR"; // Définir la langue à français
    recognition.continuous = false; // Mode non continu (arrêt après la première reconnaissance)
    recognition.interimResults = false; // Pas de résultats intermédiaires

    // Sélection des éléments startButton et resultParagraph dans le DOM
    const startButton = document.getElementById("start");
    const resultParagraph = document.getElementById("result");

    // Événement de clic sur le bouton de démarrage
    startButton.addEventListener("click", () => {
      recognition.start();
      resultParagraph.textContent = "Écoute en cours...";
    });

    // Événement déclenché lorsqu'un résultat vocal est obtenu
    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript.toLowerCase().trim();
      const jacqueSaid = simonSaysText.innerHTML === "Jacque a dit parle";

      if ((jacqueSaid && speechResult === "parle") || (!jacqueSaid && speechResult !== "parle")) {
        resultParagraph.textContent = `Victoire !`;
        Utils.addToScore(10);
      } else {
        resultParagraph.textContent = "Défaite !";
        Utils.loseLife();
      }

      // Redirection vers une page aléatoire après 3 secondes
      setTimeout(() => {
        window.location.href = Utils.getRandomPath();
      }, 3000);
    };

    // Événement déclenché lorsque la reconnaissance vocale est terminée
    recognition.onspeechend = () => {
      recognition.stop();
    };

    // Gestion des erreurs de reconnaissance vocale
    recognition.onerror = (event) => {
      resultParagraph.textContent = `Erreur de reconnaissance vocale : ${event.error}`;
    };

    // Événement déclenché lorsque la reconnaissance vocale est arrêtée sans résultat
    recognition.onend = () => {
      if (resultParagraph.textContent === "Écoute en cours...") {
        resultParagraph.textContent = "Défaite ! Vous n'avez rien dit.";
        Utils.loseLife();
      }
    };
  }

  // Compte à rebours
  let countdown = 8;
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = countdown;

  const countdownInterval = setInterval(() => {
    countdown--;
    countdownElement.innerHTML = countdown;

    if (countdown === 0) {
      clearInterval(countdownInterval);
      if (Utils.sessionData.lives === 0) {
        Utils.gameOver();
      }
      // Désactivation du bouton de soumission
      document.getElementById("submitBtn").disabled = true;
    }
  }, 800);
});
