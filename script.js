const quizData = [
  {
    question: 'What is my favorite color?',
    a: 'Blue',
    b: 'Green',
    c: 'Purple',
    d: 'Yellow',
    correct: 'b',
  },
  {
    question: 'What is my favorite foods?',
    a: 'Egg, chicken',
    b: 'Vegetables',
    c: 'Steak',
    d: 'Burger',
    correct: 'a',
  },
  {
    question: 'What is my favorite series?',
    a: 'Kardes payi',
    b: 'Firends',
    c: 'Aski memnu',
    d: 'Masumlar apartmani',
    correct: 'a',
  },
  {
    question: 'What is my favorite room?',
    a: 'Bedroom',
    b: 'Bath room',
    c: 'Living room',
    d: 'Kitchen',
    correct: 'b',
  },
  {
    question: 'What is my favorite thing?',
    a: 'Computer',
    b: 'Knife',
    c: 'Chair',
    d: 'Treadmill',
    correct: 'a',
  },
];
const quizEl = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text');
const submitBtn = document.getElementById('submit');
let currentQuestion = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuestion];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuestion].correct) {
      score++;
      console.log(score);
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      // TODO show results

      quizEl.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions</h2>`;
    }
  }
});
function getSelected() {
  let answer = undefined;

  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}
function deselectAnswers() {
  answerEls.forEach(answerEl => {
    answerEl.checked = false;
  });
}
