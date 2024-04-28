// Get the necessary elements from the DOM
const modal = document.getElementById('modal');
const modalStartBtn = document.getElementById('modal-start-btn');
const playerNameInput = document.getElementById('name-input');
const nextBtn = document.getElementById('next');
const restartBtn = document.getElementById('restart-btn');
const questionContainer = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer-btn');
const scoreDisplay = document.getElementById('score');
const playerNameDisplay = document.getElementById('player-name');
const finalScoreModal = document.getElementById('final-score-modal');
const finalScoreText = document.getElementById('final-score-text');
const finalScoreCloseBtn = document.getElementById('final-score-close-btn'); // Close button of final score modal

// Update total questions display
const totalQuestionsDisplay = document.getElementById('total-questions');
let currentQuestionIndex = 0; // Initialize current question index
let score = 0; // Initialize score
let questionsAnswered = 0; // Initialize the number of questions answered by the player


   // Define questions without using arrays
   const questions = [
    {
    question: "What is JavaScript primarily used for?",
    answers: ["Creating interactive websites", "Designing databases", "Writing operating systems"],
    correctAnswer: "Creating interactive websites"
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answers: ["var", "let", "const"],
    correctAnswer: "var"
  },
  {
    question: "How do you write a single-line comment in JavaScript?",
    answers: ["// This is a comment", "<!-- This is a comment -->", "/* This is a comment */"],
    correctAnswer: "// This is a comment"
  },
  {
    question: "What does the DOM stand for in JavaScript?",
    answers: ["Document Object Model", "Data Output Module", "Digital Object Manager"],
    correctAnswer: "Document Object Model"
  },
  {
    question: "Which method is used to display a message in the browser console?",
    answers: ["console.log()", "alert()", "prompt()"],
    correctAnswer: "console.log()"
  },
  {
    question: "How do you write a function in JavaScript?",
    answers: ["function myFunction() { // code here }", "def myFunction() { // code here }", "func myFunction() { // code here }"],
    correctAnswer: "function myFunction() { // code here }"
  },
  {
    question: "Which symbol is used for equality comparison in JavaScript?",
    answers: ["==", "=", "==="],
    correctAnswer: "=="
  },
  {
    question: "What does NaN stand for in JavaScript?",
    answers: ["Not a Number", "No Available Number", "Numeric Argument Notation"],
    correctAnswer: "Not a Number"
  },
  {
    question: "How do you concatenate two strings in JavaScript?",
    answers: ["Using the + operator", "Using the - operator", "Using the * operator"],
    correctAnswer: "Using the + operator"
  },
  {
    question: "What is the result of 5 + '5' in JavaScript?",
    answers: ["'55'", "10", "5"],
    correctAnswer: "'55'"
  },
  {
    question: "Which method is used to convert a string to an integer in JavaScript?",
    answers: ["parseInt()", "toInteger()", "parseInteger()"],
    correctAnswer: "parseInt()"
  },
  {
    question: "How do you create a loop that runs a specific number of times?",
    answers: ["Using a for loop", "Using a while loop", "Using a do-while loop"],
    correctAnswer: "Using a for loop"
  },
 
];


// Function to start the quiz
function startQuiz() {
    console.log("Starting quiz...");
      closeModal(); // Close modal
      displayRandomQuestion(); // Display random question
      const playerName = playerNameInput.value.trim(); // Get player name
      playerNameDisplay.textContent = playerName; // Update player name in the score line
  }
