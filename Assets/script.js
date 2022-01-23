// Main vars
var timekeeper = document.querySelector("nav");
var startbutton = document.querySelector("#startbutton");
var questionEl = document.querySelector("#question");
var answerEl = document.querySelector("#answer");
var timeLeft = 78;

var questionIndex = [q1, q2, q3, q4, q5];
var q1 = new Question("Arrays in Javascript can be used to store __.", ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],3);
var q2 = new Question("A very useful tool used during development and debugging for printing content to the debugger is?", ["Javascript","Terminal/Bash", "For Loops", "Console Log"],3);
var q3 = new Question("String values must be enclosed within___ when being assigned to variables.", ["Commas", "Curly Brackets", "Quotes", "Parentheses"],2);
var q4 = new Question("Commonly used data types DO NOT include:", ["Strings", "Booleans", "Alerts", "Numbers"], 2);
var q5 = new Question("The condition in an if / else statement is enclosed within__.", ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"], 2);
let currentQuestion = 0;

// Button
startbutton.addEventListener("click", quizstart);

//Runs the quiz
function quizstart() {
    countdown();
    //add question function
    //add game end
}

//timer function
function countdown() {
    var timeInterval = setInterval(function () {
        if (timeLeft >1) {
            timekeeper.textContent = timeLeft + 'seconds remaining';
            timeLeft -- ;
        } else if (timeLeft === 1) {
            timekeeper.textContent = timeLeft + ' second remaining';
             timeLeft--;
        } else {
            timekeeper.textContent = 'GAME OVER';
            clearInterval(timeInterval);
            window.alert("GAME OVER!!");
        }
    }, 1000);
}
    //subtract for worng answers


//question function

    // 5 questions
    // record answers
    //end quiz alert
    // alert correct and incorrect 

//game end
    //show scores
    //highscores record