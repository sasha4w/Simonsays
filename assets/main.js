// SOLO SESSION //
import * as Utils from './utils.js';
// Objet pour stocker les données de session
Utils.loadSessionFromLocalStorage();
console.log("Vies restantes :", Utils.sessionData.lives);
console.log("Score actuel :", Utils.sessionData.score);
// Au chargement de la page, charger les données de session si elles existent déjà dans localStorage
Utils.resetSession();
console.log("Vies restantes :", Utils.sessionData.lives);
console.log("Score actuel :", Utils.sessionData.score);




// Sauvegarde les données de session dans localStorage après chaque modification
// saveSessionToLocalStorage();


let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    console.log('beforeinstallprompt event fired');
    // Empêcher l'affichage automatique de la bannière d'installation
    e.preventDefault();
    // Stocker l'événement pour l'utiliser plus tard
    deferredPrompt = e;
    // Afficher le bouton d'installation
    const installButton = document.getElementById('installButton');
    if (installButton) {
        installButton.style.display = 'block';

        installButton.addEventListener('click', () => {
            // Afficher la bannière d'installation native
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('L\'utilisateur a accepté l\'installation');
                    // Demander la permission de notification après l'acceptation de l'installation
                    requestNotificationPermission();
                } else {
                    console.log('L\'utilisateur a refusé l\'installation');
                }
                deferredPrompt = null;
            });
        });
    }
});

// Fonction pour demander la permission de notification
function requestNotificationPermission() {
    if (Notification.permission === 'default') {
        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                console.log('Permission de notification accordée.');
            } else {
                console.log('Permission de notification refusée.');
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




// Randomlink //
// Liste des chemins d'accès possibles


// Fonction pour choisir un chemin aléatoire


// Fonction exécutée lors du clic sur le bouton
document.getElementById('randomLink').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le lien de suivre le href
    const randomPath = Utils.getRandomPath();
    // Redirection vers le chemin d'accès aléatoire
    window.location.href = randomPath;
});

