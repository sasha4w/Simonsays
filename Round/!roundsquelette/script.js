document.addEventListener("DOMContentLoaded", function() {


// Correction    
  function isCorrect() {
    if (word === randomWord) {
        
        document.getElementById("result").innerHTML = "Victoire!";
    } else {
        document.getElementById("result").innerHTML = "Incorrect!";
    }
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
