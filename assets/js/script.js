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
