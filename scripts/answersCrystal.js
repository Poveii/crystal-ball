/* ========= VARIABLES ========= */
const answerElement = document.querySelector("#answer");
const inputQuestionElement = document.querySelector("#inputQuestion");
const buttonAskElement = document.querySelector("#buttonAsk");

const answersToQuestions = [
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

const answersToEmptyQuestions = [
  "You don't ask me anything...",
  "Make me a question, come on!",
  "Seriously? A question please.",
];

/* ========= FUNCTIONS ========= */
function generateRandomNumbers(list) {
  const total = list.length;
  const randomNumber = Math.floor(Math.random() * total);
  return randomNumber;
}

function includesEasterEgg(easterEgg) {
  if (inputQuestionElement.value.includes(easterEgg)) {
    return true;
  } else return false;
}

function verifyEmptyQuestion() {
  if (inputQuestionElement.value === "") {
    buttonAskElement.setAttribute("disabled", true);

    answerElement.style.opacity = 1;

    let anyNumberToEmptyAnswers = generateRandomNumbers(
      answersToEmptyQuestions
    );

    answerElement.innerHTML = answersToEmptyQuestions[anyNumberToEmptyAnswers];

    setTimeout(function () {
      answerElement.style.opacity = 0;
      buttonAskElement.removeAttribute("disabled");
    }, 2000); // disappear answer after 2 seconds

    return true;
  } else return false;
}

function askQuestion() {
  if (verifyEmptyQuestion() === false) {
    buttonAskElement.setAttribute("disabled", true);

    const question = "<div>" + inputQuestionElement.value + "</div>";

    let anyNumberToAnswers = generateRandomNumbers(answersToQuestions);

    if (includesEasterEgg("can") === true) {
      answerElement.innerHTML = "Everything will be alright!";

      answerElement.style.opacity = 1;

      inputQuestionElement.value = "";

      setTimeout(function () {
        answerElement.style.opacity = 0;
        buttonAskElement.removeAttribute("disabled");
      }, 4000); // disappear answer after 4 seconds
    } else {
      answerElement.innerHTML =
        question + answersToQuestions[anyNumberToAnswers];

      answerElement.style.opacity = 1;

      inputQuestionElement.value = "";

      setTimeout(function () {
        answerElement.style.opacity = 0;
        buttonAskElement.removeAttribute("disabled");
      }, 3000); // disappear answer after 3 seconds
    }
  }
}
