document.addEventListener("DOMContentLoaded", function() {
  console.log("DOMContentLoaded event fired");

  let countdown = 10;
  const countdownElement = document.getElementById("countdown");
  const resultElement = document.getElementById("result");
  let isClicked = false;

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
          resultElement.innerHTML = "Victoire!";
          clearInterval(countdownInterval);
        }
      };
    }
  }

  // Show the notification after a random time between 5 to 8 seconds
  const notificationDelay = Math.floor(Math.random() * 3000) + 5000;
  console.log("Notification will appear after", notificationDelay / 1000, "seconds");
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
