import * as Utils from './../../assets/utils.js';

Utils.loadSessionFromLocalStorage();
Utils.updateUI();

document.addEventListener("DOMContentLoaded", function () {
  const colors = {
    "#ff0000": "rouge",
    "#1aff00": "vert",
    "#1500ff": "bleu",
    "#f2ff00": "jaune",
    "#d900ff": "violet",
    "#ff99c2": "rose",
  };

  const colorKeys = Object.keys(colors);
  const randomHexColor =
    colorKeys[Math.floor(Math.random() * colorKeys.length)];
  const colorName = colors[randomHexColor];

  document.getElementById("wordAsked").style.color = randomHexColor;

  const words = [
    "amour", "beauté", "courage", "dévouement", "espoir", "fleur", "gloire", "honneur", "intelligence", "joie",
    "liberté", "montagne", "nature", "océan", "paix", "quête", "rêve", "sérénité", "tranquillité", "univers",
    "vérité", "voyage", "weekend", "xylophone", "yacht", "zèbre", "adorable", "brillant", "chaleureux", "délicat",
    "élégant", "fascinant", "gentil", "harmonieux", "impressionnant", "jovial", "kilo", "lumière", "magnifique",
    "novateur", "optimiste", "parfait", "quotidien", "rafraîchissant", "splendide", "tranquille", "unique",
    "vibrant", "wisigoth", "xénophile", "yahourt", "zélé", "accomplir", "braver", "créer", "développer", "écrire",
    "fabriquer", "grandir", "honorer", "imaginer", "jouer", "kiosque", "laver", "mélanger", "nourrir", "organiser",
    "préparer", "quitter", "réaliser", "sélectionner", "travailler", "utiliser", "visiter", "watt", "xylophoniste",
    "yogisme", "zébré", "amical", "bienveillant", "curieux", "doux", "énergique", "fort", "généreux", "heureux",
    "idéal", "jeune", "kitchenette", "lumineux", "majestueux", "noble", "ordonné", "pétillant", "quintessence",
    "radieux", "sincère", "talentueux", "utopique", "vaillant", "wok", "xérophile", "yoga", "zen", "artisan", "bijou",
    "carnet", "découverte", "étoile", "fantaisie", "goût", "harmonie", "image", "joie", "kaléidoscope", "légende",
    "musique", "nuance", "orchestre", "poésie", "quatuor", "récit", "sculpture", "tableau", "universel", "valse",
    "wagon", "xylème", "yéti", "zigzag", "angoisse", "bonheur", "chagrin", "détente", "émerveillement", "fierté",
    "gratitude", "hésitation", "inspiration", "jubilation", "kinésithérapie", "libération", "méditation",
    "nostalgie", "optimisme", "plénitude", "quiétude", "réflexion", "satisfaction", "tendresse", "union", "vivacité"
  ];

  let isSubmitted = false;
  const randomWord = generateRandomWord();
  document.getElementById("wordAsked").innerHTML = randomWord;

  function generateRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  function isCorrect() {
    const word = document.getElementById("word1").value.trim().toLowerCase();
    if (word === colorName) {
      document.getElementById("result").innerHTML = "Victoire!";
      Utils.addToScore(10);
    } else {
      document.getElementById("result").innerHTML = "Incorrect!";
      Utils.loseLife();
    }
    document.getElementById("word1").disabled = true;
    document.getElementById("submitBtn").disabled = true;
    isSubmitted = true;

    if (Utils.sessionData.lives === 0) {
      Utils.gameOver();
    }
    setTimeout(() => {
      window.location.href = Utils.getRandomPath();
    }, 3000);
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
      document.getElementById("submitBtn").disabled = true;
    }
  }, 800);
});

document.addEventListener("copy", function (event) {
  const selection = document.getSelection();
  if (
    selection
      .toString()
      .includes(document.querySelector(".no-copy").textContent)
  ) {
    event.preventDefault();
  }
});

document
  .getElementById("submitBtn")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("wordCheck").submit();
    }
  });
