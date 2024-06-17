// PROMPT //
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  // Empêcher l'affichage automatique de la bannière d'installation
  e.preventDefault();
  // Stocker l'événement pour l'utiliser plus tard
  deferredPrompt = e;
  // Afficher le bouton d'installation
  const installButton = document.getElementById("installButton");
  installButton.style.display = "block";

  installButton.addEventListener("click", () => {
    // Afficher la bannière d'installation native
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("L'utilisateur a accepté l'installation");
        // Demander la permission de notification après l'acceptation de l'installation
        requestNotificationPermission();
      } else {
        console.log("L'utilisateur a refusé l'installation");
      }
      deferredPrompt = null;
    });
  });
});

// autorisé les notifications
function requestNotificationPermission() {
  if (Notification.permission === "default") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Permission de notification accordée.");
      } else {
        console.log("Permission de notification refusée.");
      }
    });
  }
}

// ANIMATION MENU //
TweenMax.staggerFrom(
  ".btn",
  2,
  { scale: 0.5, opacity: 0, delay: 0.5, ease: Elastic.easeOut, force3D: true },
  0.2
);

// ANIMATION BOUTON ROUND //
document.querySelectorAll(".levelTest").forEach(function(button) {
  button.addEventListener("click", function(event) {
    event.preventDefault(); // Empêche la redirection immédiate

    var targetUrl = button.getAttribute("href"); // Capture l'URL du lien du bouton cliqué

    // Ajout d'un délai avant de permettre la navigation
    setTimeout(function() {
      window.location.href = targetUrl;
    }, 300); // 300 millisecondes correspondent à la durée de l'animation CSS
  });
});


// ROUND //

