window.questions = questions;
const btnNewGame = document.getElementById('btn-new-game');
const btnSkipQuestion = document.getElementById('btn-skip-question');
const option1 = document.querySelector('.option1'),
  option2 = document.querySelector('.option2'),
  option3 = document.querySelector('.option3'),
  option4 = document.querySelector('.option4');
const optionsAll = document.querySelectorAll('.options');
const questionAdd = document.getElementById('question');
const correctAnswer = document.getElementById('quantity-correct-answers');
const totalPrize = document.getElementById('total-prize-tracker');
const currentPrize = document.getElementById('current-prize');
let indexOfCurrentQuestion;
let currentQuestion = 0;
let score = 0;
let numberOfAllquestions = questions.lenght;

const load = () => {
  questionAdd.innerHTML = questions[indexOfCurrentQuestion].question;

  option1.innerHTML = questions[indexOfCurrentQuestion].content[0];
  option2.innerHTML = questions[indexOfCurrentQuestion].content[1];
  option3.innerHTML = questions[indexOfCurrentQuestion].content[2];
  option4.innerHTML = questions[indexOfCurrentQuestion].content[3];
  currentQuestion++;
  getRandomQuestion(); //збільшуємо питання на 1
};

const getRandomQuestion = () => {
  let randomQuestions = Math.floor(Math.random() * questions.lenght);

  if (currentQuestion === questions.lenght) {
    gameOver();
  } else {
    indexOfCurrentQuestion === randomQuestions;
  }
};

window.addEventListener('load', () => {
  load();
  getRandomQuestion();
});
