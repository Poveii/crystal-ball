/* ========== VARIABLES ========== */
const elementPhrase = document.querySelector("#phrase");
const phrasesQuestions = [
  "I will reveal your destiny!",
  "What are you going to ask me now?",
  "Have something in mind? Make a question",
  "I don't have all day, just make your question",
  "I'm waiting for you ask me...",
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
