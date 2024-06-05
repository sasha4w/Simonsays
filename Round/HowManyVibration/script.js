document.addEventListener("DOMContentLoaded", function () {
  // Correction
  function isCorrect() {
    if (vibrationNumber === 3) {
      document.getElementById("result").innerHTML = "Victoire!";
    } else {
      document.getElementById("result").innerHTML = "Incorrect!";
    }
  }

  navigator.vibrate =
    navigator.vibrate ||
    navigator.webkitVibrate ||
    navigator.mozVibrate ||
    navigator.msVibrate;
  function vibrateSimple() {
    navigatorvibrate([200, 200, 200]);
  }
  if (navigator.vibrate) {
    // vibration API supported

    document.getElementById("vibration").innerHTML = "Bizz Bizz !";
    //navigator.vibrate(1000);
    navigator.vibrate([200, 200, 200]);
    //navigator.vibrate(0);
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
      document.getElementById("vibrationNumber").disabled = true;
      document.getElementById("submitBtn").disabled = true; // Masquer le bouton
    }
  }, 1000);
  document
    .getElementById("submitBtn")
    .addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault(); // Empêche l'action par défaut d'Entrée
        document.getElementById("vibrationForm").submit(); // Soumet le formulaire
      }
    });
  document
    .getElementById("submitBtn")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Empêche la soumission par défaut du formulaire
      isCorrect();
    });
});
