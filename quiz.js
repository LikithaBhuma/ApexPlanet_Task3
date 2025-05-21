const questions = [
  {
    question: "Which language runs in a web browser?",
    answers: [
      { text: "Java", correct: false },
      { text: "C", correct: false },
      { text: "Python", correct: false },
      { text: "JavaScript", correct: true }
    ]
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Central Style Sheets", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Cascading Simple Sheets", correct: false },
      { text: "Cars SUVs Sailboats", correct: false }
    ]
  },
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hypertext Markup Language", correct: true },
      { text: "Hyperloop Machine Language", correct: false },
      { text: "Hyperlinks and Text Markup Language", correct: false },
      { text: "Home Tool Markup Language", correct: false }
    ]
  },
  {
    question: "What does the DOM stand for?",
    answers: [
      { text: "Document Object Model", correct: true },
      { text: "Data Object Management", correct: false },
      { text: "Digital Object Model", correct: false },
      { text: "Display Order Model", correct: false }
    ]
  },
  {
    question: "Which of the following is a JavaScript framework?",
    answers: [
      { text: "Django", correct: false },
      { text: "React", correct: true },
      { text: "Laravel", correct: false },
      { text: "Flask", correct: false }
    ]
  },
  {
    question: "What is the correct syntax for referring to an external script?",
    answers: [
      { text: "<script src='script.js'>", correct: true },
      { text: "<script href='script.js'>", correct: false },
      { text: "<script ref='script.js'>", correct: false },
      { text: "<link src='script.js'>", correct: false }
    ]
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      { text: "msgBox('Hello World')", correct: false },
      { text: "alertBox('Hello World')", correct: false },
      { text: "msg('Hello World')", correct: false },
      { text: "alert('Hello World')", correct: true }
    ]
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    answers: [
      { text: "<css>", correct: false },
      { text: "<style>", correct: true },
      { text: "<script>", correct: false },
      { text: "<stylesheet>", correct: false }
    ]
  },
  {
    question: "Which property is used to change the background color in CSS?",
    answers: [
      { text: "color", correct: false },
      { text: "bgcolor", correct: false },
      { text: "background-color", correct: true },
      { text: "background", correct: false }
    ]
  },
  {
    question: "How do you add a comment in JavaScript?",
    answers: [
      { text: "# This is a comment", correct: false },
      { text: "// This is a comment", correct: true },
      { text: "<!-- This is a comment -->", correct: false },
      { text: "** This is a comment **", correct: false }
    ]
  }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.textContent = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");
    if (answer.correct) {
      button.dataset.correct = true;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}
function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
  }
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.textContent = `You scored ${score} out of ${questions.length}!`;
  nextButton.textContent = "Play Again";
  nextButton.style.display = "block";
}
function handleNext() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNext();
  } else {
    startQuiz();
  }
});
startQuiz();
