document.addEventListener("DOMContentLoaded", function () {
  // Correction
  function isCorrect() {
    if (word === randomWord) {
      document.getElementById("result").innerHTML = "Victoire!";
    } else {
      document.getElementById("result").innerHTML = "Incorrect!";
    }
  }

  // Spam Click

  let clickCount = 0;
  let requiredClicks;

  document.getElementById("startButton").addEventListener("click", startGame);
  document.getElementById("clickButton").addEventListener("click", handleClick);

  function startGame() {
    // Réinitialiser le jeu
    clickCount = 0;
    requiredClicks = Math.floor(Math.random() * 25) + 1;

    document.getElementById("clickCount").innerText = clickCount;
    document.getElementById(
      "instructions"
    ).innerText = `Vous devez cliquer ${requiredClicks} fois pour gagner.`;
    document.getElementById("result").innerText = "";

    document.getElementById("clickButton").disabled = false;
  }

  function handleClick() {
    clickCount++;
    document.getElementById("clickCount").innerText = clickCount;

    if (clickCount >= requiredClicks) {
      endGame(true);
    }
  }

  function endGame(victory) {
    if (victory) {
      document.getElementById("result").innerText = "Vous avez gagné!";
    } else {
      document.getElementById("result").innerText = "Vous avez perdu.";
    }
    document.getElementById("clickButton").disabled = true;
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
