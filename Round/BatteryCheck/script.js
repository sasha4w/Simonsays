document.addEventListener("DOMContentLoaded", function() {
  // Chrono
  let countdown = 8;
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = countdown;
  let isSubmitted = false;

  const countdownInterval = setInterval(() => {
    countdown--;
    countdownElement.innerHTML = countdown;

    if (countdown === 0) {
      clearInterval(countdownInterval);
      checkBatteryStatus();
    }
  }, 800);

  // Function to check battery status
  function checkBatteryStatus() {
    navigator.getBattery().then(function(battery) {
      if (battery.charging) {
        document.getElementById("result").innerHTML = "Victoire! La batterie est en charge.";
      } else {
        document.getElementById("result").innerHTML = "Défaite! La batterie n'est pas en charge.";
      }
    });
  }
});
