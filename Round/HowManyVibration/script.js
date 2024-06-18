import * as Utils from './../../assets/utils.js';

Utils.loadSessionFromLocalStorage();
Utils.updateUI();
document.addEventListener("DOMContentLoaded", function () {
  let isSubmitted = false;
  const numVibrations = Math.floor(Math.random() * 10) + 1;
  // Correction function
  function isCorrect() {
    const vibrationNumber = document
      .getElementById("vibrationNumber")
      .value.trim();
    if (parseInt(vibrationNumber) === numVibrations) {
      document.getElementById("result").innerHTML = "Victoire!";
      Utils.addToScore(10);
    } else {
      document.getElementById("result").innerHTML = "Incorrect!";
      Utils.loseLife();
    }
    document.getElementById("vibrationNumber").disabled = true;
    document.getElementById("submitBtn").disabled = true;
    isSubmitted = true;
    if (Utils.sessionData.lives === 0) {
      Utils.gameOver();
    }
    setTimeout(() => {
        window.location.href = Utils.getRandomPath();
    }, 3000);
  }

  document
    .getElementById("submitBtn")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Empêche la soumission par défaut du formulaire
      isCorrect();
    });

  // Vibration support check and initiation
  navigator.vibrate =
    navigator.vibrate ||
    navigator.webkitVibrate ||
    navigator.mozVibrate ||
    navigator.msVibrate;

  // Generate random vibration sequence
  function getRandomVibrationSequence() {
    let sequence = [];
    for (let i = 0; i < numVibrations; i++) {
      sequence.push(200, 200); // 200ms vibration followed by 200ms pause
    }
    console.log("Number of vibrations:", numVibrations);
    return sequence;
  }

  let vibrationSequence = getRandomVibrationSequence();

  function vibrateSimple() {
    if (navigator.vibrate) {
      navigator.vibrate(vibrationSequence);
    }
  }

  document
    .getElementById("vibrationOn")
    .addEventListener("click", vibrateSimple);

  if (navigator.vibrate) {
    document.getElementById("vibration").innerHTML = "Bizz Bizz !";
    navigator.vibrate(vibrationSequence);
  } else {
    document.getElementById("vibration").innerHTML = "ça vibre pas";
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
