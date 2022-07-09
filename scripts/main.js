/* ========== VARIABLES ========== */
const elementPhrase = document.querySelector("#phrase");
const phrasesQuestions = [
  "Vou revelar o seu destino!",
  "O que você vai me perguntar agora?",
  "Tem algo em mente? Faça uma pergunta",
  "Eu não tenho o dia todo, faça logo a sua pergunta",
  "A certeza não é uma certeza de uma certeza",
];

/* ========== FUNCTIONS ========== */
function generateRandomNumbers(list) {
  const total = list.length;
  const randomNumber = Math.floor(Math.random() * total);
  return randomNumber;
}

function phraseCrystalBall() {
  let anyNumberPhrases = generateRandomNumbers(phrasesQuestions);

  elementPhrase.innerHTML = phrasesQuestions[anyNumberPhrases];
}

/* ========== EXECUTION ========== */
phraseCrystalBall();
