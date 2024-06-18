import * as Utils from './../../assets/utils.js';

Utils.loadSessionFromLocalStorage();
Utils.updateUI();
document.addEventListener("DOMContentLoaded", function() {
  let countdown = 8;
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = countdown;
  let isSubmitted = false;
  let isDark = false;

  function checkLightLevel() {
    if ('AmbientLightSensor' in window) {
      try {
        const sensor = new AmbientLightSensor();
        sensor.addEventListener('reading', () => {
          console.log(`Current light level: ${sensor.illuminance}`);
          if (sensor.illuminance < 10) { // You can adjust this threshold
            isDark = true;
          }
        });
        sensor.start();
      } catch (e) {
        console.error('Ambient Light Sensor not supported:', e);
      }
    } else {
      console.log('Ambient Light Sensor not supported by the browser.');
    }
  }

  checkLightLevel();

  function isCorrect() {
    if (isDark) {
      document.getElementById("result").innerHTML = "Victoire!";
      Utils.addToScore(10);
    } else {
      document.getElementById("result").innerHTML = "Défaite!";
      Utils.loseLife();
    }
    if (Utils.sessionData.lives === 0) {
      Utils.gameOver();
    }
  }

  const countdownInterval = setInterval(() => {
    countdown--;
    countdownElement.innerHTML = countdown;

    if (countdown === 0) {
      clearInterval(countdownInterval);
      if (!isSubmitted) {
        isCorrect();
      }
    }
  }, 1000); // Set interval to 1000ms for a real-time countdown
});
