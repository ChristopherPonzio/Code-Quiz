// Main vars
var timekeeper = document.querySelector("nav");
var startbutton = document.querySelector("#button");
var question = [""];
var answers = [""];
var timeLeft = 78;
//Timer
function countdown() {
    vartimeInterval = setInterval(function () {
        if (timeLeft >1) {
            timekeeper.textContent = timeLeft + 'seconds remaining';
            timeLeft -- ;
        } else {
            timekeeper.textContent = 'GAME OVER';
            clearInterval(timeInterval);
        }
    },1000);
}


// Button
startbutton.addEventListener("click", quizstart);

//Runs the quiz
function quizstart() {
    countdown();
    
    //add question function
    //add game end
}

//timer function
    //x time
    //subtract for worng answers
    //end of timer end quiz alert

//question function
    // 5 questions
    // record answers
    //end quiz alert
    // alert correct and incorrect 

//game end
    //show scores
    //highscores record