document.addEventListener("DOMContentLoaded", function () {
  let isSubmitted = false;

  // Générer un nombre aléatoire de vibrations entre 1 et 10
  const randomVibrationNumber = Math.floor(Math.random() * 10) + 1;

  // Afficher le nombre de vibrations aléatoires
  document.getElementById(
    "vibrationCount"
  ).innerHTML = `Nombre de vibrations: ${randomVibrationNumber}`;

  // Fonction de correction
  function isCorrect() {
    const vibrationNumber = document
      .getElementById("vibrationNumber")
      .value.trim();
    if (parseInt(vibrationNumber) === randomVibrationNumber) {
      document.getElementById("result").innerHTML = "Victoire!";
    } else {
      document.getElementById("result").innerHTML = "Incorrect!";
    }
    document.getElementById("vibrationNumber").disabled = true;
    document.getElementById("submitBtn").disabled = true;
    isSubmitted = true;
  }

  // Empêche la soumission par défaut du formulaire et vérifie l'entrée
  document
    .getElementById("submitBtn")
    .addEventListener("click", function (event) {
      event.preventDefault();
      if (!isSubmitted) {
        isCorrect();
      }
    });

  // Vérification de la prise en charge de la vibration et définition de la fonction de vibration simple
  navigator.vibrate =
    navigator.vibrate ||
    navigator.webkitVibrate ||
    navigator.mozVibrate ||
    navigator.msVibrate;

  function vibrateSimple() {
    if (navigator.vibrate) {
      let pattern = [];
      for (let i = 0; i < randomVibrationNumber; i++) {
        pattern.push(200, 200); // 200ms de vibration, 200ms de pause
      }
      navigator.vibrate(pattern);
    }
  }

  // Ajouter un écouteur d'événement pour le bouton de vibration
  document
    .getElementById("vibrationOn")
    .addEventListener("click", vibrateSimple);

  // Afficher l'état de la fonctionnalité de vibration au chargement de la page
  if (navigator.vibrate) {
    document.getElementById("vibration").innerHTML = "Bizz Bizz !";
    vibrateSimple();
  } else {
    document.getElementById("vibration").innerHTML = "ça vibre pas";
  }
  // Countdown logic
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
      document.getElementById("vibrationNumber").disabled = true;
      document.getElementById("submitBtn").disabled = true;
    }
  }, 1000);

  document
    .getElementById("vibrationNumber")
    .addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault(); // Empêche l'action par défaut d'Entrée
        document.getElementById("vibrationForm").submit(); // Soumet le formulaire
      }
    });
});
