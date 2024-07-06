import * as Utils from './../../assets/utils.js';

Utils.loadSessionFromLocalStorage();
Utils.updateUI();
document.addEventListener("DOMContentLoaded", function() {
    let countdown = 8;
    const countdownElement = document.getElementById("countdown");
    const resultElement = document.getElementById("result");
    const startButton = document.getElementById("startButton");

    let shakeThreshold = 15; // Threshold for detecting a shake
    let shakeDetected = false;
    let timeout;
    let countdownInterval;
    let gameStartTime;
    const shakeWindowStart = 2; // Shake window starts at 2 seconds
    const shakeWindowEnd = 3; // Shake window ends at 3 seconds
    const shouldSucceed = () => Math.random() < 0.25;
    const startGame = () => {
        shakeDetected = false;
        countdown = 8;
        countdownElement.innerHTML = countdown;
        resultElement.innerHTML = '';
        startButton.disabled = true;
        gameStartTime = new Date().getTime(); // Record the start time of the game
        if (shouldSucceed()) {
            simonSaysText.innerHTML = "Jacques n'a pas dit secoue ton appareil";
        } else {
            simonSaysText.innerHTML = "Jacques a dit secoue ton appareil";
        }

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
                const currentTime = new Date().getTime();
                const elapsedTime = (currentTime - gameStartTime) / 1000;

                if (elapsedTime >= shakeWindowStart && elapsedTime <= shakeWindowEnd) {
                    shakeDetected = true;
                    endGame();
                }
            }
        }
    };

    const endGame = () => {
        clearInterval(countdownInterval);
        clearTimeout(timeout);
        window.removeEventListener('devicemotion', handleShake);

        if ((simonSaysText.innerHTML === "Jacques a dit secoue ton appareil" && shakeDetected) ||
        (simonSaysText.innerHTML === "Jacques n'a pas dit secoue ton appareil" && !shakeDetected)) {
        resultElement.innerHTML = "Victoire!";
        Utils.addToScore(10);
    } else {
        resultElement.innerHTML = "Perdu!";
        Utils.loseLife();
    }
        
        startButton.disabled = false;
        if (Utils.sessionData.lives === 0) {
            Utils.gameOver();
          }
        setTimeout(() => {
              window.location.href = Utils.getRandomPath();
          }, 3000);
    };

    startButton.addEventListener('click', startGame);
});