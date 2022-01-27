// Main vars
const startbutton = document.getElementById('startbutton');
var timekeeper = document.getElementById('timekeeper');
var timeLeft = 78;
const questionContEl = document.getElementById('questionbox');
const questionEl = document.getElementById('question');
const answerButtonsEl = document.getElementById('answerButtons');
let shuffle, currentQuestionIndex;
let timeInterval;
const highScore = document.getElementById('userScore');
let score = document.getElementById('score');
var initials = document.getElementById('initials');
const submit = document.getElementById('submit');

// Button
startbutton.addEventListener("click", quizstart);

//Runs the quiz
function quizstart() {
    countdown();
    startbutton.classList.add('hide');
    questionContEl.classList.remove('hide');
    shuffle = questions.sort(()=> Math.random()- .5);
    currentQuestionIndex = 0;
    setNextQuestion();
}

//timer function
function countdown() {
    timeInterval = setInterval(function () {
        if (timeLeft >1) {
            timekeeper.textContent = timeLeft + 'seconds remaining';
            timeLeft -- ;
        } else if (timeLeft === 1) {
            timekeeper.textContent = timeLeft + ' second remaining';
             timeLeft--;
        } else {
            timekeeper.textContent = 'Game Over';
            clearInterval(timeInterval);
            endGame();   
        }
    }, 1000);
}
// Pulls the Next question
function setNextQuestion() {
    resetState();
    showQuestion(shuffle[currentQuestionIndex]);
}

//Shows question
function showQuestion(question) {
    questionEl.innerText=question.question;
    question.answers.forEach(answers => {
        const button = document.createElement('button')
        button.innerText = answers.text;
        button.classList.add('btn');
        if (answers.correct) {
            button.dataset.correct = answers.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsEl.appendChild(button);
    })
}
// Keeps HTML from containing all questions at 1 time
function resetState() {
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild
        (answerButtonsEl.firstChild);
    }
}
// Creats the answer buttons or ends the quiz
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (shuffle.length > currentQuestionIndex + 1) {
        currentQuestionIndex++
        setTimeout(setNextQuestion, 500);   
    } else {
        endGame()
    }
}
// sets the buttons to correct or incorrect
function setStatusClass(element, correct){
    clearStatusClass(element);
    if(correct) {
        element.classList.add('correct')
        
    } else {
        element.classList.add('wrong');
    }
}

// clears the status of the buttons for the next question
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
const questions = [
    {
        question: "Arrays in Javascript can be used to store __.",
        answers: [
            {text: "Numbers and Strings", correct: false},
            {text: "Other Arrays", correct: false},
            {text: "Booleans", correct: false},
            {text: "All of the Above", correct: true}
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is?",
        answers: [
            {text: "Javascript", correct: false},
            {text: "Terminal/Bash", correct: false},
            {text: "For Loops", correct: false},
            {text: "Console Log", correct: true}
        ]
    },

    {
        question: "String values must be enclosed within___ when being assigned to variables.",
        answers: [
            {text: "Commas", correct: false},
            {text: "Curly Brackets", correct: false},
            {text: "Parentheses", correct: false},
            {text: "Quotes", correct: true}
        ]
    },
    //var q4 = new Question("Commonly used data types DO NOT include:", ["Strings", "Booleans", "Alerts", "Numbers"], 2);
    {
        question: "Arrays in Javascript can be used to store __.",
        answers: [
            {text: "Numbers and Strings", correct: false},
            {text: "Other Arrays", correct: false},
            {text: "Booleans", correct: false},
            {text: "All of the Above", correct: true}
        ]
    },
    //var q5 = new Question("The condition in an if / else statement is enclosed within__.", ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"], 2);
    {
        question: "Arrays in Javascript can be used to store __.",
        answers: [
            {text: "Numbers and Strings", correct: false},
            {text: "Other Arrays", correct: false},
            {text: "Booleans", correct: false},
            {text: "All of the Above", correct: true}
        ]
    }
]
// end game shows score
function endGame() {
    console.log (timeLeft+ 1);
    clearInterval(timeInterval);
    score.innerHTML = "Your Score is" + (timeLeft) + "!";
    questionContEl.classList.add('hide');
    highScore.classList.remove('hide');
}
//submit high score to local storage
submit.addEventListener('click', function(event) {
    event.preventDefault();
    var highScore = {
        initials: initials.value.trim(),
        score: timeLeft
    };
    localStorage.setItem("initials",JSON.stringify(highScore));
    saveScore();
});
// unnessecary function to say your score has been 
function saveScore() {
    score.textContent = "Your Score has been saved!";
    }