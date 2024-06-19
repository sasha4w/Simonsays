let sessionData = {
    lives: 3,
    score: 0
};
const baseUrl = `${window.location.protocol}//${window.location.host}/`;
const paths = [
    "Round/WordCheck/index.html",
    "Round/Chifoumi/index.html",
    "Round/Trivia/index.html",
    "Round/ColorCheck/index.html",
    "Round/HowManyVibration/index.html",
    "Round/VoiceCheck/index.html",
    "Round/SpamClick/index.html",
    "Round/Landscapemode/index.html",
    "Round/ShakeIt/index.html",
    "Round/BatteryCheck/index.html",
    // "Round/LumesCheck/index.html",
    // "Round/NotifCheck/index.html"
];
// Fonction pour perdre une vie
function loseLife() {
    sessionData.lives--;
    saveSessionToLocalStorage();
    // Ici vous pouvez gérer la logique liée à la perte de vie, par exemple afficher un message ou réinitialiser certaines conditions de jeu
}

// Fonction pour ajouter des points au score
function addToScore(points) {
    sessionData.score += points;
    saveSessionToLocalStorage();
    // Ici vous pouvez gérer la logique liée à l'ajout de points, par exemple vérifier si le joueur a gagné ou perdu en fonction du score
}

// Fonction pour réinitialiser les données de session
function resetSession() {
    sessionData.lives = 3;
    sessionData.score = 0;
    saveSessionToLocalStorage(); // Sauvegarde les données réinitialisées dans localStorage
}

// Exemple de sauvegarde des données dans localStorage
function saveSessionToLocalStorage() {
    localStorage.setItem('sessionData', JSON.stringify(sessionData));
}

// Exemple de chargement des données depuis localStorage
function loadSessionFromLocalStorage() {
    let storedSessionData = localStorage.getItem('sessionData');
    if (storedSessionData) {
        sessionData = JSON.parse(storedSessionData);
    }
}
let lastPath = null;

function getRandomPath(currentPath) {
    // Filtre les chemins pour exclure le chemin actuel et le dernier chemin sélectionné
    const filteredPaths = paths.filter(path => path !== currentPath && path !== lastPath);
    
    // Si après le filtrage il ne reste plus qu'un chemin, on le sélectionne automatiquement
    if (filteredPaths.length === 1) {
        lastPath = filteredPaths[0];
        return baseUrl + lastPath;
    }

    // Sinon, on choisit un chemin au hasard parmi les chemins restants
    const randomIndex = Math.floor(Math.random() * filteredPaths.length);
    const randomPath = filteredPaths[randomIndex];

    // Met à jour le buffer avec le chemin choisi
    lastPath = randomPath;

    return baseUrl + randomPath;
}
function gameOver() {
    window.location.href = `${baseUrl}gameOver.html`;
}
function updateUI() {
    document.getElementById('livesCount').textContent = sessionData.lives;
    document.getElementById('scoreDisplay').textContent = sessionData.score;
}

export { sessionData, getRandomPath, loseLife, addToScore, resetSession, saveSessionToLocalStorage, loadSessionFromLocalStorage, updateUI, gameOver, };