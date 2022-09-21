/* ========= VARIABLES ========= */
const answerElement = document.querySelector("#answer");
const inputQuestionElement = document.querySelector("#inputQuestion");
const buttonAskElement = document.querySelector("#buttonAsk");

const phraseElement = document.querySelector("#phrase");
const phraseList = [
  "Vou revelar seu destino!",
  "O que você vai me perguntar agora?",
  "Tem algo em mente? Faça uma pergunta",
  "Eu não tenho o dia todo, só faça sua pergunta.",
  "Eu estou esperando sua pergunta...",
];

const answersToQuestions = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
  "Não.",
];

const answersToEmptyQuestions = [
  "Você não me perguntou nada...",
  "Me faça uma pergunta, qual é!",
  "Sério? Uma pergunta por favor.",
];

/* ========= FUNCTIONS ========= */
function generateRandomNumbers(list) {
  return Math.floor(Math.random() * list.length);
}

function phraseCrystalBall() {
  let randomNumberToPhrases = generateRandomNumbers(phraseList);

  phraseElement.innerHTML = phraseList[randomNumberToPhrases];
}

phraseCrystalBall();

function includesEasterEgg(easterEgg) {
  if (inputQuestionElement.value.includes(easterEgg)) {
    return true;
  } else return false;
}

function verifyEmptyQuestion() {
  if (inputQuestionElement.value === "") {
    buttonAskElement.setAttribute("disabled", true);

    let randomNumberToEmptyAnswers = generateRandomNumbers(
      answersToEmptyQuestions
    );

    answerElement.innerHTML =
      answersToEmptyQuestions[randomNumberToEmptyAnswers];

    return true;
  } else return false;
}

function askQuestion() {
  if (verifyEmptyQuestion() === false) {
    buttonAskElement.setAttribute("disabled", true);

    const question = "<div>" + inputQuestionElement.value + "</div>";

    let randomNumberToAnswers = generateRandomNumbers(answersToQuestions);

    if (includesEasterEgg("consigo") === true) {
      answerElement.innerHTML = "Tudo vai dar certo! Não se preocupa.";
    } else {
      answerElement.innerHTML =
        question + answersToQuestions[randomNumberToAnswers];
    }
  }

  answerElement.style.opacity = 1;

  inputQuestionElement.value = "";

  setTimeout(function () {
    answerElement.style.opacity = 0;
    buttonAskElement.removeAttribute("disabled");
  }, 3000); // disappear answer after 3 seconds
}
