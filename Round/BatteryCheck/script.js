import * as Utils from './../../assets/utils.js';

Utils.loadSessionFromLocalStorage();
Utils.updateUI();
document.addEventListener("DOMContentLoaded", function() {
  // Chrono
  let countdown = 8;
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = countdown;
  const shouldSucceed = () => Math.random() < 0.25;
  if (shouldSucceed()) {
    simonSaysText.innerHTML = "Jacque n'a pas dit soit en charge";
} else {
    simonSaysText.innerHTML = "Jacque a dit soit en charge";
}

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
      if ((simonSaysText.innerHTML === "Jacque n'a pas dit écrit soit en charge" && !battery.charging) || (simonSaysText.innerHTML === "Jacque a dit écrit soit en charge" && battery.charging)) {
        document.getElementById("result").innerHTML = "Victoire !";
        Utils.addToScore(10);
      } else {
        document.getElementById("result").innerHTML = "Défaite !";
        Utils.loseLife();
      }
    });
  }
});
