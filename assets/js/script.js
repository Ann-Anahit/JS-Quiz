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

// Event listener for the modal start button
modalStartBtn.addEventListener('click', () => {
    console.log("Modal start button clicked.");
    const playerName = playerNameInput.value.trim(); // Get player name
    if (playerName !== '') {
        startQuiz(); // Start quiz
    } else {
        alert('Please enter your name to start the game.'); // Prompt user to enter name
    }
});
// Function to close the modal
function closeModal() {
    modal.close();
}

// Event listener for the "Next" button
nextBtn.addEventListener("click", nextQuestion);

// Event listener for the "Restart" button
restartBtn.addEventListener("click", resetQuiz);

// Event listener for answer buttons
answerButtons.forEach(button => {
    button.addEventListener('click', () => checkAnswer(button.textContent));
});

// Function to display a random question
function displayRandomQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    // Display the question number
    questionContainer.textContent = `Question ${questionsAnswered + 1}: ${currentQuestion.question}`;

    // Display the answer options
    currentQuestion.answers.forEach((answer, index) => {
        answerButtons[index].textContent = answer;
        answerButtons[index].style.backgroundColor = ""; // Reset button color
        answerButtons[index].disabled = false; // Enable button
    });
}

// Function to check the selected answer
function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const selectedButton = event.target;

    if (selectedAnswer === correctAnswer) {
        // Add 1 point for a correct answer
        score += 1;
        scoreDisplay.textContent = score;
        selectedButton.style.backgroundColor = "#055d2c"; // Set button color to green for correct answer
    } else {
        selectedButton.style.backgroundColor = "#800e32"; // Set button color to red for incorrect answer

        // Find the correct answer button and mark it as green
        answerButtons.forEach(button => {
            if (button.textContent === correctAnswer) {
                button.style.backgroundColor = "#055d2c"; // Set correct answer button color to green
            }
        });
    }

    // Disable all answer buttons to prevent further clicks
    answerButtons.forEach(button => {
        button.disabled = true;
    });

    questionsAnswered++; // Increment the number of questions answered
}

// Function to move to the next question
function nextQuestion() {
    console.log("Moving to next question...");
    console.log("Current question index:", currentQuestionIndex);
    console.log("Questions answered:", questionsAnswered);

    if (questionsAnswered < 12 && currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayRandomQuestion(); // Display next question
    } else {
        endQuiz(); // End the quiz if the player has answered 12 questions or reached the end of the questions array
    }
}

// Function to reset the quiz
function resetQuiz() {
    currentQuestionIndex = 0; // Reset current question index
    score = 0; // Reset score
    questionsAnswered = 0; // Reset the number of questions answered
    scoreDisplay.textContent = score; // Reset score display
    displayRandomQuestion(); // Display first question
}

// Function to end the quiz
function endQuiz() {
    const playerName = playerNameDisplay.textContent;
    const finalScore = scoreDisplay.textContent;
    finalScoreText.textContent = `Congratulations ${playerName}! Your final score is ${finalScore}.`;
    finalScoreModal.showModal();
}

// Add event listener to the close button of the final score modal
finalScoreCloseBtn.addEventListener('click', () => {
    // Close the final score modal
    finalScoreModal.close();
});