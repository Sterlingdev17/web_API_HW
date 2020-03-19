var questions = [
    {
        title: "Example Question 1:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "answer from choices"
    },
    {
        title: "Example Question 2:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "answer from choices"
    }
];

// create htmml

var container = document.querySelector(".container");
var startBtn = document.createElement("button");
var TimerDiplay = document.querySelector(".timeDisplay");

var resuttAnswer = document.createElement("h4")

// function to start the quiz
function startQuiz() {
    var questions = $("<h1>").text("what is your name");
    $(".container").prepend(questions);
    myTimer();
    createChoices();
    
}

function createChoices(){
    for (var i = 0; i < questions[0].choices.length; i++){
       var answerBtn = $("<button>").text(questions[0].choices[i]);
       $(".container").append(answerBtn);
       $(answerBtn).on("click", function(){
           $(".container").empty()
       })
        console.log("this works" + i);
    }
 
    

}




$(".startBtn").on("click", startQuiz);

var timer = 15
var counter = 0;

// functions for the next question
function nextQuestion() {

}
function myTimer() {
    var timeset = setInterval(() => {
        counter++;
        TimerDiplay.textContent = timer - counter;
        if (counter === 15) {
            clearInterval(timeset);

        }

    }, 1000);



} 

