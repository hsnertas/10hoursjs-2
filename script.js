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
  const currentQuizData = quizData[currentQuestion];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener('click', () => {
  currentQuestion++;
  const answer = getSelected();
  if (currentQuestion < quizData.length) {
    loadQuiz();
  } else {
    // TODO show results
    alert('You finish  get yourself an orange lemonade');
  }
});
function getSelected() {
  const answerEls = document.querySelectorAll('.answer');
  let answer = undefined;

  answerEls.forEach(answerEl => {
    console.log('hello');
    if (answerEl.checked) {
      return answerEl.id;
    }
  });
}
