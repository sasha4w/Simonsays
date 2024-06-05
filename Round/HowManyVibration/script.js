document.addEventListener("DOMContentLoaded", function () {
  // Correction
  function isCorrect() {
    if (word === randomWord) {
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

  if (navigator.vibrate) {
    // vibration API supported

    document.getElementById("vibration").innerHTML = "Bizz Bizz !";
    //navigator.vibrate(1000);
    navigator.vibrate([500, 500, 500]);
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
      document.getElementById("word1").disabled = true;
      document.getElementById("submitBtn").disabled = true; // Masquer le bouton
    }
  }, 800);
});
