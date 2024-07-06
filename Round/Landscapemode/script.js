import * as Utils from './../../assets/utils.js';

Utils.loadSessionFromLocalStorage();
Utils.updateUI();
document.addEventListener("DOMContentLoaded", function () {
  let countdown = 8;
  const countdownElement = document.getElementById("countdown");
  const resultElement = document.getElementById("result");
  
  countdownElement.innerHTML = countdown;
  
  const shouldSucceed = () => Math.random() < 0.25;
  if (shouldSucceed()) {
    simonSaysText.innerHTML = "Jacques n'a pas dit met ton appareil en paysage";
} else {
    simonSaysText.innerHTML = "Jacques a dit met ton appareil en paysage";
}
  const countdownInterval = setInterval(() => {
  countdown--;
  countdownElement.innerHTML = countdown;
  if (countdown === 0) {
    clearInterval(countdownInterval);
  
    // Check if the device is in landscape mode
    const orientationType = window.screen.orientation.type;
    const JacquesSaid = simonSaysText.innerHTML === "Jacques a dit met ton appareil en paysage";
    if (
      ((simonSaysText.innerHTML === "Jacques n'a pas dit met ton appareil en paysage" && orientationType === "portrait-primary" ||
        simonSaysText.innerHTML === "Jacques n'a pas dit met ton appareil en paysage" && orientationType === "portrait-secondary") 
        || (simonSaysText.innerHTML === "Jacques a dit met ton appareil en paysage" && orientationType === "landscape-primary" ||
        simonSaysText.innerHTML === "Jacques a dit met ton appareil en paysage" && orientationType === "landscape-secondary"))
    ) {
      resultElement.innerHTML = "Victoire !";
      Utils.addToScore(10);
    } else {
      resultElement.innerHTML = "Perdu !";
      Utils.loseLife();
    }
    if (Utils.sessionData.lives === 0) {
      Utils.gameOver();
    }
    setTimeout(() => {
        window.location.href = Utils.getRandomPath();
    }, 3000);
  }
  }, 1000);
  });