document.addEventListener("DOMContentLoaded", function() {
  // Chifoumi
  const buttons = document.querySelectorAll("button");
  let isSubmitted = false; // Drapeau pour suivre si le joueur a fait un choix

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      const joueur = buttons[i].innerHTML;
      const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
      let resultat = "";
      if (joueur === robot) {
        resultat = "Egalité";
      } else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Ciseaux" && robot === "Feuilles") || (joueur === "Feuilles" && robot === "Pierre")) {
        resultat = "Gagné";
      } else {
        resultat = "Perdu";
      }
      document.querySelector(".resultat").innerHTML = `
        Joueur : ${joueur} </br>
        Robot : ${robot} <br/>
        Résultat : ${resultat}
      `;
      isSubmitted = true; // Marquer que le joueur a fait un choix
    });
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
        // Définir automatiquement le résultat à "Perdu" si le temps est écoulé
        document.querySelector(".resultat").innerHTML = `
          Résultat : Perdu (Temps écoulé)
        `;
      }
      // Désactiver les boutons
      buttons.forEach(button => button.disabled = true);
    }
  }, 1000); // Intervalle ajusté à 1000ms (1 seconde) pour plus de précision
});