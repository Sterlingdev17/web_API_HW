var questions = [
    {
        title: "Example Question 1:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "Choice 3"
    },
    {
        title: "Example Question 2:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "Choice 1"
    },
    {
        title: "Example Question 3:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "Choice 2"
    }
];

var questionIndex = 0;
var score = 0

// create htmml

var container = document.querySelector(".container");
var startBtn = document.createElement("button");
var TimerDiplay = document.querySelector(".timeDisplay");

var resuttAnswer = document.createElement("h4")

// function to start the quiz
function startQuiz() {
    
    myTimer();
    createChoices();
    createQuestions();
    
}


// loop for answers 

function createChoices(){
    for (var i = 0; i < questions[questionIndex].choices.length; i++){
       var answerBtn = $("<button>").attr("class", "btn").text(questions[0].choices[i]);
      
      // create a button to start
       $(".container").append(answerBtn);
       $(answerBtn).on("click", function(){
           if (questions[questionIndex].answer === $(this).text()){
               score++;
               console.log(score);
           }
           $(".container").empty()
           questionIndex++;
        if (questions.length === questionIndex ) {
            alert(score + " out of 3")
        }
           
       })
    }  

}
function createQuestions(){
    
    var question = $("<h1>").text(questions[questionIndex].title);
    $(".container").prepend(question);   
}

// once start button push clock start
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

