/* ========= VARIABLES ========= */
const elementAnswer = document.querySelector("#answer");
const inputQuestion = document.querySelector("#inputQuestion");
const buttonAsk = document.querySelector("#buttonAsk");

const answersQuestions = [
  "Of Course!",
  "I'm not so sure.",
  "It's decidedly so.",
  "Don't count on it.",
  "No doubt!",
  "Ask again later.",
  "Yes, definitely!",
  "My answer is no.",
  "You can count on that.",
  "Better not tell you now.",
  "In my view, yes.",
  "My sources says no.",
  "Probably.",
  "It's not possible to predict now.",
  "Good Outlook.",
  "The prospects aren't so good.",
  "Yes.",
  "Focus and ask again.",
  "Signs points to yes.",
  "No.",
];

const answersEmptyQuestions = [
  "You don't ask me anything...",
  "Make me a question, come on!",
  "Seriously? A question please.",
];

/* ========= FUNCTIONS ========= */
function verifyEmptyQuestion() {
  if (inputQuestion.value == "") {
    buttonAsk.setAttribute("disabled", true);

    elementAnswer.style.opacity = 1;

    let anyNumberAnswers = generateRandomNumbers(answersEmptyQuestions);

    elementAnswer.innerHTML = answersEmptyQuestions[anyNumberAnswers];

    setTimeout(function () {
      elementAnswer.style.opacity = 0;
      buttonAsk.removeAttribute("disabled");
    }, 2000);

    return true;
  } else return false;
}

function generateRandomNumbers(list) {
  const total = list.length;
  const randomNumber = Math.floor(Math.random() * total);
  return randomNumber;
}

function askQuestion() {
  if (verifyEmptyQuestion() == false) {
    buttonAsk.setAttribute("disabled", true);

    const question = "<div>" + inputQuestion.value + "</div>";

    let anyNumberAnswers = generateRandomNumbers(answersQuestions);

    elementAnswer.innerHTML = question + answersQuestions[anyNumberAnswers];

    elementAnswer.style.opacity = 1;

    inputQuestion.value = "";

    setTimeout(function () {
      elementAnswer.style.opacity = 0;
      buttonAsk.removeAttribute("disabled");
    }, 3000); // disappear answer after 3 seconds
  }
}
