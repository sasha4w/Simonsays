document.addEventListener("DOMContentLoaded", function() {
    const colors = {
        '#ff0000': 'rouge',
        '#1aff00': 'vert',
        '#1500ff': 'bleu',
        '#f2ff00': 'jaune',
        '#d900ff': 'violet',
        '#ff99c2': 'rose'
    };
    
    const colorKeys = Object.keys(colors); // Obtenir les clés de l'objet
    const randomHexColor = colorKeys[Math.floor(Math.random() * colorKeys.length)]; // Sélectionner une clé aléatoire
    const colorName = colors[randomHexColor]; // Récupérer le nom de la couleur correspondante
    
    document.getElementById("wordAsked").style.color = randomHexColor;
      // Liste de mots parmi lesquels choisir aléatoirement
  const words = [  "amour", "beauté", "courage", "dévouement", "espoir", "fleur", "gloire", "honneur", "intelligence", "joie",
  "liberté", "montagne", "nature", "océan", "paix", "quête", "rêve", "sérénité", "tranquillité", "univers",
  "vérité", "voyage", "weekend", "xylophone", "yacht", "zèbre", "adorable", "brillant", "chaleureux", "délicat",
  "élégant", "fascinant", "gentil", "harmonieux", "impressionnant", "jovial", "kilo", "lumière", "magnifique",
  "novateur", "optimiste", "parfait", "quotidien", "rafraîchissant", "splendide", "tranquille", "unique", "vibrant",
  "wisigoth", "xénophile", "yahourt", "zélé", "accomplir", "braver", "créer", "développer", "écrire", "fabriquer",
  "grandir", "honorer", "imaginer", "jouer", "kiosque", "laver", "mélanger", "nourrir", "organiser", "préparer",
  "quitter", "réaliser", "sélectionner", "travailler", "utiliser", "visiter", "watt", "xylophoniste", "yogisme",
  "zébré", "amical", "bienveillant", "curieux", "doux", "énergique", "fort", "généreux", "heureux", "idéal",
  "jeune", "kitchenette", "lumineux", "majestueux", "noble", "ordonné", "pétillant", "quintessence", "radieux",
  "sincère", "talentueux", "utopique", "vaillant", "wok", "xérophile", "yoga", "zen", "artisan", "bijou",
  "carnet", "découverte", "étoile", "fantaisie", "goût", "harmonie", "image", "joie", "kaléidoscope", "légende",
  "musique", "nuance", "orchestre", "poésie", "quatuor", "récit", "sculpture", "tableau", "universel", "valse",
  "wagon", "xylème", "yéti", "zigzag", "angoisse", "bonheur", "chagrin", "détente", "émerveillement", "fierté",
  "gratitude", "hésitation", "inspiration", "jubilation", "kinésithérapie", "libération", "méditation", "nostalgie",
  "optimisme", "plénitude", "quiétude", "réflexion", "satisfaction", "tendresse", "union", "vivacité"];

  // Fonction pour générer un mot aléatoire
  function generateRandomWord() {
      const randomIndex = Math.floor(Math.random() * words.length);
      return words[randomIndex];
  }


  // Mettre à jour l'élément avec un mot aléatoire quand la page se charge
  const randomWord = generateRandomWord();
  document.getElementById("wordAsked").innerHTML = randomWord;

    // Ajouter un écouteur d'événements au bouton
    function isCorrect() {
        const word = document.getElementById("word1").value.trim();
        const colorName = colors[randomHexColor]; // Récupérer le nom de la couleur correspondante
    
        if (word === colorName) {
            document.getElementById("result").innerHTML = "Victoire!";
        } else {
            document.getElementById("result").innerHTML = "Incorrect!";
        }
        document.getElementById("word1").disabled = true;
        document.getElementById("submitBtn").disabled = true;
        isSubmitted = true;
    }
  document.getElementById("submitBtn").addEventListener("click", isCorrect);
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
document.addEventListener('copy', function(event) {
    const selection = document.getSelection();
    if (selection.toString().includes(document.querySelector('.no-copy').textContent)) {
        event.preventDefault();
    }
});
document.getElementById('submitBtn').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Empêche l'action par défaut d'Entrée
        document.getElementById('wordCheck').submit(); // Soumet le formulaire
    }
});
document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire
    isCorrect();
});