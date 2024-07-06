import * as Utils from './../../assets/utils.js';

Utils.loadSessionFromLocalStorage();
Utils.updateUI();
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOMContentLoaded event fired");

  let countdown = 10;
  const countdownElement = document.getElementById("countdown");
  const resultElement = document.getElementById("result");
  let isClicked = false;
  const shouldSucceed = () => Math.random() < 0.25;
  if (shouldSucceed()) {
    simonSaysText.innerHTML = "Jacques n'a pas dit de cliquer sur la notification";
} else {
    simonSaysText.innerHTML = "Jacques a dit de cliquer sur la notification";
}
  countdownElement.innerHTML = countdown;

  // Request notification permission
  if (Notification.permission !== "granted") {
    Notification.requestPermission().then(permission => {
      console.log("Notification permission:", permission);
      if (permission !== "granted") {
        alert("Please enable notifications for this game to work.");
      }
    });
  }

  // Function to show notification
  function showNotification() {
    console.log("Showing notification");
    if (Notification.permission === "granted") {
      const notification = new Notification("Click me to win!", {
        body: "Click this notification before time runs out.",
        icon: "icon.png" // Ensure icon.png is correctly located
      });

     notification.onclick = () => {
      if (!isClicked) {
        isClicked = true;
        // Vérifiez le texte pour déterminer le résultat
        if (simonSaysText.innerHTML === "Jacques a dit de cliquer sur la notification") {
          resultElement.innerHTML = "Victoire!";
          Utils.addToScore(10);
        } 
      }
      };
    }
  }

  // Show the notification after a random time between 5 to 6 seconds
  const notificationDelay = Math.floor(Math.random() * 3000) + 3000;
  console.log("Notification will appear after", notificationDelay / 1000, "seconds");
  setTimeout(showNotification, notificationDelay);

  // Countdown timer
  const countdownInterval = setInterval(() => {
    countdown--;
    countdownElement.innerHTML = countdown;

    if (countdown === 0) {
      clearInterval(countdownInterval);
      if (!isClicked && simonSaysText.innerHTML === "Jacques n'a pas dit de cliquer sur la notification") {
        resultElement.innerHTML = "Victoire!";
        Utils.addToScore(10);
      } 
      if (!isClicked && simonSaysText.innerHTML == "Jacques a dit de cliquer sur la notification" || isClicked == true && simonSaysText.innerHTML == "Jacques n'a pas dit de cliquer sur la notification") {
        resultElement.innerHTML = "Défaite!";
        Utils.loseLife();
        if (Utils.sessionData.lives === 0) {
          Utils.gameOver();
        }
      }
      setTimeout(() => {
        window.location.href = Utils.getRandomPath();
    }, 3000);

    }
  }, 1000);
});
