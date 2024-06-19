import * as Utils from './../../assets/utils.js';

Utils.loadSessionFromLocalStorage();
Utils.updateUI();
document.addEventListener("DOMContentLoaded", function () {
  // Tableau des questions et choix de réponses
  const shouldSucceed = () => Math.random() < 0.25;
  if (shouldSucceed()) {
    simonSaysText.innerHTML = "Jacque n'a pas dit répond juste à la question";
} else {
    simonSaysText.innerHTML = "Jacque a dit répond juste à la question";
}
  const questions = [
    {
      question: "Quel est le plus grand océan du monde ?",
      choices: [
        "Océan Atlantique",
        "Océan Indien",
        "Océan Arctique",
        "Océan Pacifique",
      ],
      correct: 3,
    },
    {
      question: "Qui a peint la Joconde ?",
      choices: [
        "Michel-Ange",
        "Léonard de Vinci",
        "Pablo Picasso",
        "Vincent van Gogh",
      ],
      correct: 1,
    },
    {
      question: "Quelle est la capitale de l'Australie ?",
      choices: ["Sydney", "Canberra", "Melbourne", "Brisbane"],
      correct: 1,
    },
    {
      question: "Quel est le symbole chimique de l'eau ?",
      choices: ["O", "H2", "H2O", "O2"],
      correct: 2,
    },
    {
      question: "Quel écrivain est l'auteur de '1984' ?",
      choices: [
        "George Orwell",
        "Aldous Huxley",
        "Ray Bradbury",
        "Philip K. Dick",
      ],
      correct: 0,
    },
    {
      question: "Quelle est la monnaie officielle du Japon ?",
      choices: ["Yuan", "Yen", "Won", "Baht"],
      correct: 1,
    },
    {
      question: "Quelle planète est la plus proche du Soleil ?",
      choices: ["Vénus", "Mars", "Terre", "Mercure"],
      correct: 3,
    },
    {
      question:
        "En quelle année l'homme a-t-il marché sur la Lune pour la première fois ?",
      choices: ["1965", "1969", "1972", "1980"],
      correct: 1,
    },
    {
      question: "Quel est le plus grand désert du monde ?",
      choices: [
        "Désert de Gobi",
        "Désert du Sahara",
        "Désert de l'Antarctique",
        "Désert d'Arabie",
      ],
      correct: 2,
    },
    {
      question: "Quelle est la langue officielle du Brésil ?",
      choices: ["Espagnol", "Français", "Portugais", "Italien"],
      correct: 2,
    },
    {
      question: "Quel est le plus haut sommet du monde ?",
      choices: [
        "Mont Everest",
        "Mont Kilimandjaro",
        "Mont Blanc",
        "Mont Elbrouz",
      ],
      correct: 0,
    },
    {
      question: "Qui a écrit 'Les Misérables' ?",
      choices: [
        "Émile Zola",
        "Victor Hugo",
        "Gustave Flaubert",
        "Honoré de Balzac",
      ],
      correct: 1,
    },
    {
      question: "Quelle est la plus grande planète du système solaire ?",
      choices: ["Terre", "Saturne", "Jupiter", "Neptune"],
      correct: 2,
    },
    {
      question: "Dans quel pays se trouve la Tour Eiffel ?",
      choices: ["Espagne", "Italie", "France", "Allemagne"],
      correct: 2,
    },
    {
      question: "Quel est l'élément chimique dont le symbole est Fe ?",
      choices: ["Fer", "Fluor", "Francium", "Fermium"],
      correct: 0,
    },
    {
      question: "Quelle ville est connue sous le nom de 'Big Apple' ?",
      choices: ["Los Angeles", "San Francisco", "New York", "Chicago"],
      correct: 2,
    },
    {
      question: "Quel est le plus long fleuve du monde ?",
      choices: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      correct: 1,
    },
    {
      question: "Qui a découvert l'Amérique ?",
      choices: [
        "Ferdinand Magellan",
        "Marco Polo",
        "Christophe Colomb",
        "Vasco de Gama",
      ],
      correct: 2,
    },
    {
      question: "Quelle est la plus grande île du monde ?",
      choices: ["Groenland", "Madagascar", "Borneo", "Nouvelle-Guinée"],
      correct: 0,
    },
    {
      question: "Quelle est la capitale de l'Espagne ?",
      choices: ["Barcelone", "Madrid", "Séville", "Valence"],
      correct: 1,
    },
    {
      question: "Quel pays est surnommé le 'pays du Soleil-Levant' ?",
      choices: ["Chine", "Corée", "Thaïlande", "Japon"],
      correct: 3,
    },
    {
      question: "Quel est le plus grand pays du monde en superficie ?",
      choices: ["Canada", "Chine", "États-Unis", "Russie"],
      correct: 3,
    },
    {
      question: "Qui a écrit 'Roméo et Juliette' ?",
      choices: [
        "William Shakespeare",
        "Charles Dickens",
        "Mark Twain",
        "Jane Austen",
      ],
      correct: 0,
    },
    {
      question: "Quelle est la plus petite planète du système solaire ?",
      choices: ["Mercure", "Mars", "Vénus", "Pluton"],
      correct: 0,
    },
    {
      question: "Quel est le symbole chimique de l'or ?",
      choices: ["Ag", "Au", "Pb", "Pt"],
      correct: 1,
    },
    {
      question: "Qui a peint 'La nuit étoilée' ?",
      choices: [
        "Claude Monet",
        "Vincent van Gogh",
        "Pablo Picasso",
        "Paul Cézanne",
      ],
      correct: 1,
    },
    {
      question: "Quelle est la langue la plus parlée au monde ?",
      choices: ["Anglais", "Espagnol", "Chinois", "Hindou"],
      correct: 2,
    },
    {
      question: "Quelle est la capitale du Canada ?",
      choices: ["Toronto", "Vancouver", "Montréal", "Ottawa"],
      correct: 3,
    },
    {
      question: "Quel pays a remporté la Coupe du Monde de la FIFA 2018 ?",
      choices: ["Brésil", "Allemagne", "France", "Espagne"],
      correct: 2,
    },
    {
      question: "Quel est le plus grand lac d'eau douce du monde ?",
      choices: [
        "Lac Victoria",
        "Lac Tanganyika",
        "Lac Supérieur",
        "Lac Baïkal",
      ],
      correct: 2,
    },
    {
      question: "Quelle est la capitale de l'Italie ?",
      choices: ["Venise", "Milan", "Naples", "Rome"],
      correct: 3,
    },
    {
      question: "Quel est le plus long fleuve d'Amérique du Sud ?",
      choices: ["Orénoque", "Paraná", "Amazon", "Rio Negro"],
      correct: 2,
    },
    {
      question: "Qui a écrit 'Le Petit Prince' ?",
      choices: [
        "Antoine de Saint-Exupéry",
        "Marcel Proust",
        "Albert Camus",
        "Jean-Paul Sartre",
      ],
      correct: 0,
    },
    {
      question: "Quel pays a inventé les Jeux Olympiques ?",
      choices: ["Italie", "Grèce", "France", "Japon"],
      correct: 1,
    },
    {
      question: "Quelle est la monnaie officielle du Royaume-Uni ?",
      choices: ["Euro", "Livre sterling", "Dollar", "Franc"],
      correct: 1,
    },
    {
      question: "Quelle est la plus haute montagne d'Afrique ?",
      choices: ["Mont Elgon", "Mont Kenya", "Mont Kilimandjaro", "Mont Meru"],
      correct: 2,
    },
    {
      question: "Quel est le plus grand état des États-Unis ?",
      choices: ["Texas", "Californie", "Alaska", "Montana"],
      correct: 2,
    },
    {
      question: "Qui a écrit 'Guerre et Paix' ?",
      choices: [
        "Fiodor Dostoïevski",
        "Léon Tolstoï",
        "Anton Tchekhov",
        "Maxime Gorki",
      ],
      correct: 1,
    },
    {
      question: "Quelle est la capitale de la Russie ?",
      choices: ["Saint-Pétersbourg", "Vladivostok", "Novossibirsk", "Moscou"],
      correct: 3,
    },
    {
      question: "Quel est le plus long fleuve d'Asie ?",
      choices: ["Mékong", "Yangtze", "Indus", "Gange"],
      correct: 1,
    },
  ];
  // Fonction pour sélectionner une question aléatoirement
  function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  }

  // Fonction pour afficher la question et ses choix de réponses
  function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  }

  // Fonction pour afficher la question et ses choix de réponses
  function displayQuestion() {
    const questionObj = getRandomQuestion();
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");

    // Efface le contenu précédent
    questionElement.textContent = "";
    choicesElement.innerHTML = "";

    // Affiche la question
    questionElement.textContent = questionObj.question;

    // Affiche les choix de réponses comme boutons radio
    questionObj.choices.forEach((choice, index) => {
      const choiceContainer = document.createElement("div");
      const radioInput = document.createElement("input");
      const label = document.createElement("label");

      radioInput.type = "radio";
      radioInput.name = "choices";
      radioInput.value = index;
      radioInput.id = `choice${index}`;
      radioInput.addEventListener("change", () =>
        isCorrect(index, questionObj.correct)
      );
      label.htmlFor = `choice${index}`;
      label.textContent = choice;
      choiceContainer.classList.add("ma-classe-1", "ma-classe-2");
      choiceContainer.appendChild(radioInput);
      choiceContainer.appendChild(label);
      choicesElement.appendChild(choiceContainer);
    });
  }

  displayQuestion();

  // Correction
  function isCorrect(selectedIndex, correctIndex) {
    const resultElement = document.getElementById("result");
    const isShouldSucceed = simonSaysText.innerHTML === "Jacque n'a pas dit répond juste à la question";

    // Condition pour déterminer si la réponse est correcte en fonction de simonSaysText.innerHTML
    const isCorrect = isShouldSucceed ? selectedIndex !== correctIndex : selectedIndex === correctIndex;

    resultElement.textContent = isCorrect ? "Victoire !" : "Perdu !";

    // Désactiver tous les boutons radio après la sélection
    const choices = document.getElementsByName("choices");
    Array.from(choices).forEach((choice) => (choice.disabled = true));

    // Actions à entreprendre en fonction de la réponse
    if (isCorrect) {
      Utils.addToScore(10);
    } else {
      Utils.loseLife();
      if (Utils.sessionData.lives === 0) {
        Utils.gameOver();
      }
    }

    // Redirection après 3 secondes
    setTimeout(() => {
      window.location.href = Utils.getRandomPath();
    }, 3000);
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
