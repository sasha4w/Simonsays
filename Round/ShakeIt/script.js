document.addEventListener("DOMContentLoaded", function() {
  let countdown = 8;
  const countdownElement = document.getElementById("countdown");
  const resultElement = document.getElementById("result");
  const startButton = document.getElementById("startButton");

  let shakeThreshold = 15; // Threshold for detecting a shake
  let shakeDetected = false;
  let timeout;
  let countdownInterval;

  const startGame = () => {
      shakeDetected = false;
      countdown = 8;
      countdownElement.innerHTML = countdown;
      resultElement.innerHTML = '';
      startButton.disabled = true;

      // Start countdown timer
      countdownInterval = setInterval(() => {
          countdown--;
          countdownElement.innerHTML = countdown;

          if (countdown === 0) {
              clearInterval(countdownInterval);
              endGame();
          }
      }, 1000);

      // Start shake detection
      window.addEventListener('devicemotion', handleShake);

      // Set a timeout to end the game after 8 seconds if no shake detected
      timeout = setTimeout(() => {
          endGame();
      }, 8000);
  };

  const handleShake = (event) => {
      const { acceleration } = event;

      if (acceleration) {
          const totalAcceleration = Math.sqrt(
              acceleration.x ** 2 + acceleration.y ** 2 + acceleration.z ** 2
          );

          if (totalAcceleration > shakeThreshold) {
              shakeDetected = true;
              endGame();
          }
      }
  };

  const endGame = () => {
      clearInterval(countdownInterval);
      clearTimeout(timeout);
      window.removeEventListener('devicemotion', handleShake);

      if (shakeDetected) {
          resultElement.innerHTML = "Victoire!";
      } else {
          resultElement.innerHTML = "Perdu!";
      }
      
      startButton.disabled = false;
  };

  startButton.addEventListener('click', startGame);
});
