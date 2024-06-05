document.addEventListener("DOMContentLoaded", function () {
  let isSubmitted = false;

  // Correction function
  function isCorrect() {
    const vibrationNumber = document
      .getElementById("vibrationNumber")
      .value.trim();
    if (parseInt(vibrationNumber) === 3) {
      document.getElementById("result").innerHTML = "Victoire!";
    } else {
      document.getElementById("result").innerHTML = "Incorrect!";
    }
    document.getElementById("vibrationNumber").disabled = true;
    document.getElementById("submitBtn").disabled = true;
    isSubmitted = true;
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

  function vibrateSimple() {
    if (navigator.vibrate) {
      navigator.vibrate([200, 200, 200]);
    }
  }

  document
    .getElementById("vibrationOn")
    .addEventListener("click", vibrateSimple);

  if (navigator.vibrate) {
    document.getElementById("vibration").innerHTML = "Bizz Bizz !";
    navigator.vibrate([200, 200, 200]);
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
