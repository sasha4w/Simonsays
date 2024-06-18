import * as Utils from './../../assets/utils.js';

Utils.loadSessionFromLocalStorage();
Utils.updateUI();
document.addEventListener("DOMContentLoaded", function() {
  // Chrono
  let countdown = 8;
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = countdown;
  let isSubmitted = false;

  const countdownInterval = setInterval(() => {
    countdown--;
    countdownElement.innerHTML = countdown;

    if (countdown === 0 || countdown < 0) {
      clearInterval(countdownInterval);
      checkBatteryStatus();
      if (Utils.sessionData.lives === 0) {
        Utils.gameOver();
      }
      setTimeout(() => {
          window.location.href = Utils.getRandomPath();
      }, 3000);
    }
  }, 800);

  // Function to check battery status
  function checkBatteryStatus() {
    navigator.getBattery().then(function(battery) {
      if (battery.charging) {
        document.getElementById("result").innerHTML = "Victoire! La batterie est en charge.";
        Utils.addToScore(10);
      } else {
        document.getElementById("result").innerHTML = "Défaite! La batterie n'est pas en charge.";
        Utils.loseLife();
      }
    });
  }
});
