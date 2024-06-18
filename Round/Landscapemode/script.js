document.addEventListener("DOMContentLoaded", function () {
  let countdown = 8;
  const countdownElement = document.getElementById("countdown");
  const resultElement = document.getElementById("result");
  
  countdownElement.innerHTML = countdown;
  
  const countdownInterval = setInterval(() => {
  countdown--;
  countdownElement.innerHTML = countdown;
  if (countdown === 0) {
    clearInterval(countdownInterval);
  
    // Check if the device is in landscape mode
    const orientationType = window.screen.orientation.type;
    if (
      orientationType === "landscape-primary" ||
      orientationType === "landscape-secondary"
    ) {
      resultElement.innerHTML = "Victoire! Vous êtes en paysage.";
    } else {
      resultElement.innerHTML = "Perdu! Vous n'êtes pas en paysage.";
    }
  }
  }, 1000);
  });