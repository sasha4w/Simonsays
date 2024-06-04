document.addEventListener("DOMContentLoaded", function() {
  // Déclaration d'une variable pour suivre si le joueur a cliqué sur un nombre
  let hasClickedNumber = false;
  let clickedNumbers = []; // Tableau pour stocker les nombres cliqués par le joueur

  // Fonction pour vérifier si les nombres sont corrects
  function isCorrect() {
    // Vérifier si le joueur a cliqué sur un nombre
    if (!hasClickedNumber) {
      showMessage("Vous n'avez pas cliqué sur de nombre !");
      return;
    }

    // Vérifier si les tableaux sont de même taille
    if (clickedNumbers.length !== targetNumbers.length) {
      showMessage("Incorrect !");
      return;
    }

    // Vérifier si chaque nombre cliqué correspond à celui dans les cibles
    for (let i = 0; i < clickedNumbers.length; i++) {
      if (clickedNumbers[i] !== targetNumbers[i]) {
        showMessage("Incorrect !");
        return;
      }
    }

    // Si tous les nombres cliqués correspondent à l'ordre croissant, afficher la victoire
    showMessage("Victoire !");
  }

  // Fonction pour générer 4 nombres aléatoires entre 0 et 100
  function generateNumbers() {
    let numbers = [];
    for (let i = 0; i < 4; i++) {
      numbers.push(Math.floor(Math.random() * 101));
    }
    // Trier les nombres en ordre croissant
    numbers.sort((a, b) => a - b);
    return numbers;
  }

  // Initialisation du jeu
  let targetNumbers = generateNumbers();

  // Afficher les nombres sur la page
  function displayNumbers() {
    let numbersDiv = document.getElementById('numbers');
    numbersDiv.innerHTML = '';
    targetNumbers.forEach(number => {
      numbersDiv.innerHTML += `<div class="number">${number}</div>`;
    });
  }

  // Gérer le clic sur chaque nombre
  document.getElementById('numbers').addEventListener('click', event => {
    if (event.target.classList.contains('number')) {
      let clickedNumber = parseInt(event.target.innerText);
      // Ajouter le nombre cliqué au tableau des nombres cliqués par le joueur
      clickedNumbers.push(clickedNumber);
      // Marquer que le joueur a cliqué sur un nombre
      hasClickedNumber = true;
      // Vérifier si les nombres cliqués jusqu'à présent correspondent à l'ordre croissant
      isCorrect();
    }
  });

  // Afficher un message sur la page
  function showMessage(message) {
    document.getElementById('result').innerText = message;
  }

  // Initialiser le jeu au chargement de la page
  displayNumbers();
  // Chrono
  let countdown = 8;
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = countdown;

  const countdownInterval = setInterval(() => {
    countdown--;
    countdownElement.innerHTML = countdown;

    if (countdown === 0) {
      clearInterval(countdownInterval);
      isCorrect(); // Appel de la fonction pour vérifier si le temps est écoulé
    }
  }, 1000); // Mise à jour de la fréquence de l'intervalle à chaque seconde
});
