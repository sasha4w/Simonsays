document.addEventListener("DOMContentLoaded", function () {
  // Tableau des questions et choix de réponses
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

      choiceContainer.appendChild(radioInput);
      choiceContainer.appendChild(label);
      choicesElement.appendChild(choiceContainer);
    });
  }

  displayQuestion();

  // Correction
  function isCorrect(selectedIndex, correctIndex) {
    const resultElement = document.getElementById("result");
    const isCorrect = selectedIndex === correctIndex;
    resultElement.textContent = isCorrect ? "Correct!" : "Incorrect!";

    // Désactiver tous les boutons radio après la sélection
    const choices = document.getElementsByName("choices");
    choices.forEach((choice) => (choice.disabled = true));
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
