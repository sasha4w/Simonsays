// PROMPT //
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  // Empêcher l'affichage automatique de la bannière d'installation
  e.preventDefault();
  // Stocker l'événement pour l'utiliser plus tard
  deferredPrompt = e;
  // Afficher votre propre bouton ou bannière pour proposer l'installation
  showInstallPromotion();
});

function showInstallPromotion() {
  const installButton = document.createElement("button");
  installButton.textContent = "Installer l'application";
  document.body.appendChild(installButton);

  installButton.addEventListener("click", () => {
    // Afficher la bannière d'installation native
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("L'utilisateur a accepté l'installation");
      } else {
        console.log("L'utilisateur a refusé l'installation");
      }
      deferredPrompt = null;
    });
  });
}

// ANIMATION MENU //
TweenMax.staggerFrom(
  ".btn",
  2,
  { scale: 0.5, opacity: 0, delay: 0.5, ease: Elastic.easeOut, force3D: true },
  0.2
);

$(".btn").click(function () {
  TweenMax.staggerTo(
    ".btn",
    0.5,
    { opacity: 0, y: -350, ease: Back.easeIn },
    0.1
  );
});

// ROUND //

// WORD CHECK

// CHIFOUMI //
const buttons = document.querySelectorAll("button");
// const resultat = document.querySelector(".resultat");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const joueur = buttons[i].innerHTML;
    const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
    let resultat = "";
    // resultat.innerHTML = joueur + "       " + robot;
    if (joueur === robot) {
      resultat = "Egalité";
    } else if (
      (joueur === "Pierre" && robot === "Ciseaux") ||
      (joueur === "Ciseaux" && robot === "Feuilles") ||
      (joueur === "Feuilles" && robot === "Pierre")
    ) {
      resultat = "Gagné";
    } else {
      resultat = "Perdu";
    }
    document.querySelector(".resultat").innerHTML = `
  Joueur : ${joueur} </br>
  Robot : ${robot} <br/>
  Résultat : ${resultat}
`;
  });
}
