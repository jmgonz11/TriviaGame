// Variables for the entire game. 


$(document).ready(function(){

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var count = 0;
    var time = 25;
    var isSelected = false;
    var ticker;
   

// Identify Arrays for the jokes in questions and answers. 


    var question = ["How many Tickles does it take to make an octopus laugh?",
    "How can you tell the difference between an alligator and a crocodile?",
    "Why did the small pepper need a jacket?",
    "What did the grape do when someone stepped on it?",
    "Why did the pinyata hate going to parties?",
    "What do you call a snowman with a six pack?",
    "What was wrong with the restaurant on the moon?",
    "What should you do if there is a taco emergency?"];
     
    var answer = ["10 tickles!",
     "One will see you later and the other one will see you in a while!",
      "He was a little Chili",
       "He let out a little wine",
        "He always got hit on!",
         "The abdomimal snowman!",
          "It had great food, but there was no atmosphere.",
           "Call 9 Juan Juan!",];

    var firstChoice = ["8",
     "One will see you later and the other one will see you in a while!",
      "Why do peppers need jackets?",
       "He let out a little wine",
        "He has no friends",
         "Muscular",
          "It had great food, but there was no atmosphere.",
           "Eat something else!"];

    var secondChoice = ["12",
     "One is mean and one is not mean",
      "He was trying to be fashionable",
       "It got squished, duh.",
        "Pinyata's can't go to parties!",
         "The abdomimal snowman!",
          "It was dark",
           "Panic"];

    var thirdChoice = ["10 tickles!",
     "The colors",
      "He was a little Chili",
       "he died",
        "He always got hit on!",
         "In Shape",
          "The Food was horrible",
           "Call 9 Juan Juan!"];

    var fourthChoice = ["4",
     "One can hold their breath longer",
      "I hate peppers!",
       "He laughed",
        "He hates parties",
         "He's Swole Bro",
          "The moon doesn't have restaurants!",
           "Switch to a burrito"];



        
// Show & Hide Functions
    function showHolders() {
        $("#question-holder").show();
        $("#choice-holder-1").show();
        $("#choice-holder-2").show();
        $("#choice-holder-3").show();
        $("#choice-holder-4").show();
    }
    function hideHolders() {
        $("#question-holder").hide();
        $("#choice-holder-1").hide();
        $("#choice-holder-2").hide();
        $("#choice-holder-3").hide();
        $("#choice-holder-4").hide();
    }
    function hideResults() {
        $("#correct-holder").hide();
        $("#incorrect-holder").hide();
        $("#unanswered-holder").hide();
        $("#restart-holder").hide();
    }
    function displayQuestion () {
        hideResults();
        $("#answer-holder").hide();
        $("#image-holder").hide();
        $("#time-holder").show();
        showHolders();
        $("#question-holder").html(question[count]);
        $("#choice-holder-1").html(firstChoice[count]);
        $("#choice-holder-2").html(secondChoice[count]);
        $("#choice-holder-3").html(thirdChoice[count]);
        $("#choice-holder-4").html(fourthChoice[count]);
    }
    
    $("#choice-holder-1").on("click", checkAnswer); 
    $("#choice-holder-2").on("click", checkAnswer);
    $("#choice-holder-3").on("click", checkAnswer);
    $("#choice-holder-4").on("click", checkAnswer);

// Check Answer Function
    function checkAnswer() {

        hideHolders();

        if($(this).text() === answer[count]) {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Right! The answer is: " + answer[count]);
            correct++;
            count++;
        }
        else {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Wrong! The answer is: " + answer[count])
            incorrect++;
            count++;
        } 

        checkGameEnd();  
    }

// Make the end of game function 


    function checkGameEnd() {
        if(count === question.length) {
            $("#time-holder").hide();
            showResults();
            count = 0;
            $(".start").show();
            $(".start").on("click", function() {
                resetResults();
                startGame();
            });
        }
    }

    // make the questions reset 

    function resetTime() {
        time = 25;
    }

// display the time and make it count down 

    function displayTime() {
        time--;
        $("#time-holder").html("Time remaining: " + time);
      
            if(time <= 0) {
                hideHolders();
                stopTime();
                $("#answer-holder").show();
                $("#answer-holder").html("You are too slow! (like a turtle) the answer is:" + answer[count])
                unanswered++;
                count++;
                checkGameEnd();
            }
    }

    //start the count down 

    function startTime() {
        clearInterval(ticker);
        ticker = setInterval(displayTime, 1000);
    }

    // keep track of the count down 

    function stopTime() {
        clearInterval(ticker);
        resetTime();
        if(count < question.length - 1) {
            setTimeout(startTime, 2000);
            setTimeout(displayQuestion, 3000);
        }
    }

    resetTime();

 // need a function in order to see the results of the user

 function showResults() {
    $("#correct-holder").show();
    $("#correct-holder").html("Correct: " + correct);
    $("#incorrect-holder").show();
    $("#incorrect-holder").html("Incorrect: " + incorrect);
    $("#unanswered-holder").show();
    $("#unanswered-holder").html("Unanswered: " + unanswered);
    $("#restart-holder").show();
    $("#restart-holder").html("Click Start above to play again!");
}

// reset the user results here 
function resetResults() {
    correct = 0;
    incorrect = 0;
    unanswered = 0;
}

$(".start").on("click", function() {
    console.log("hey");
    startGame();

})

// start button function 
function startGame() {
    $(".start").hide(); 
    startTime();
    displayQuestion();

}

});