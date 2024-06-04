document.addEventListener("DOMContentLoaded", function() {


// Correction    
  function isCorrect() {
    if (word === randomWord) {
        
        document.getElementById("result").innerHTML = "Victoire!";
    } else {
        document.getElementById("result").innerHTML = "Incorrect!";
    }
  }
  if ('vibrate' in navigator) {
    // Déclencher une vibration sous forme de motif
    // Vibrer pendant 1 seconde, faire une pause pendant 0,5 seconde,
    // Vibrer pendant 0,2 seconde, faire une pause pendant 0,2 seconde,
    // Vibrer pendant 0,5 seconde, faire une pause pendant 1 seconde
    navigator.vibrate([1000, 200, 1000, 200, 1000, 200]);
  }
  
// Chrono
  let countdown = 8;
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = countdown;

  const countdownInterval = setInterval(() => {
      countdown--;
      countdownElement.innerHTML = countdown;

      if (countdown === 0) {
          clearInterval(countdownInterval);
          if (!isSubmitted) {
              isCorrect();
          }
          document.getElementById("word1").disabled = true;
          document.getElementById("submitBtn").disabled = true; // Masquer le bouton
      }
  }, 800);
});
