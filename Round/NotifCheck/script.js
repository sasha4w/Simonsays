document.addEventListener("DOMContentLoaded", function() {
  let countdown = 10;
  const countdownElement = document.getElementById("countdown");
  const resultElement = document.getElementById("result");
  let isClicked = false;

  countdownElement.innerHTML = countdown;

  // Request notification permission
  if (Notification.permission !== "granted") {
    Notification.requestPermission().then(permission => {
      if (permission !== "granted") {
        alert("Please enable notifications for this game to work.");
      }
    });
  }

  // Function to show notification
  function showNotification() {
    if (Notification.permission === "granted") {
      const notification = new Notification("Click me to win!", {
        body: "Click this notification before time runs out.",
        icon: "icon.png" // You can add an icon if you want
      });

      notification.onclick = () => {
        if (!isClicked) {
          isClicked = true;
          resultElement.innerHTML = "Victoire!";
          clearInterval(countdownInterval);
        }
      };
    }
  }

  // Show the notification after a random time between 5 to 8 seconds
  const notificationDelay = Math.floor(Math.random() * 3000) + 5000;
  setTimeout(showNotification, notificationDelay);

  // Countdown timer
  const countdownInterval = setInterval(() => {
    countdown--;
    countdownElement.innerHTML = countdown;

    if (countdown === 0) {
      clearInterval(countdownInterval);
      if (!isClicked) {
        resultElement.innerHTML = "Défaite!";
      }
    }
  }, 1000);
});
