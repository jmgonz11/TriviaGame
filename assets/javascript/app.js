// Variables for the entire game. 


$(document).ready(function(){

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var count = 0;
    var time = 25;
    var isSelected = false;
    var ticker;
   

    // reset the user results here 
function resetResults() {
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    console.log("correct");
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
    console.log(startGame);

}

// Identify Arrays for the jokes in questions and answers. 

// display the time and make it count down 

function displayTime() {
    time--;
    $("#time-holder").html("Seconds until you are a loser: " + time);
  
        if(time <= 0) {
            hideHolders();
            stopTime();
            $("#answers").show();
            $("#answers").html("You are too slow! (like a turtle) the answer is:" + answer[count])
            unanswered++;
            count++;
            checkGameEnd();
        }
}

//start the count down 

function startTime() {
    clearInterval(ticker);
    ticker = setInterval(displayTime, 3000);
}

// keep track of the count down 

function stopTime() {
    clearInterval(ticker);
    resetTime();
    if(count < question.length - 1) {
        setTimeout(startTime, 4000);
        setTimeout(displayQuestion, 4000);
    }
}

resetTime();


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



        
// Show & Hide Functions for each of the questions and their 4 answers. 


    function showHolders() {
        $("#questions").show();
        $("#userinput1").show();
        $("#userinput2").show();
        $("#userinput3").show();
        $("#userinput4").show();
    }
    function hideHolders() {
        $("#questions").hide();
        $("#userinput1").hide();
        $("#userinput2").hide();
        $("#userinput3").hide();
        $("#userinput4").hide();
    }
    function hideResults() {
        $("#correct-holder").hide();
        $("#incorrect-holder").hide();
        $("#unanswered-holder").hide();
        $("#restart-holder").hide();
    }


    function displayQuestion () {
        hideResults();
        $("#answers").hide();
        $("#time-holder").show();


        showHolders();


        $("#questions").html(question[count]);
        $("#userinput1").html(firstChoice[count]);
        $("#userinput2").html(secondChoice[count]);
        $("#userinput3").html(thirdChoice[count]);
        $("#userinput4").html(fourthChoice[count]);
    }




    // for each answer and checking, on the click on the right answer, make sure to show the correct one. 
    
    $("#userinput1").on("click", checkAnswer); 
    $("#userinput2").on("click", checkAnswer);
    $("#userinput3").on("click", checkAnswer);
    $("#userinput4").on("click", checkAnswer);

// Check Answer Function- have the user input be checked against the array for the right answers. 

    function checkAnswer() {

        hideHolders();

        if($(this).text() === answer[count]) {
            stopTime();
            isSelected = true;
            $("#answers").show();
            $("#answers").html("Correct!! The Answer is: " + answer[count]);
            correct++;
            count++;
        }
        else {
            stopTime();
            isSelected = true;
            $("#answers").show();
            $("#answers").html("Wrong! The answer is: " + answer[count])
            incorrect++;
            count++;
            checkGameEnd();  

        }
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
        time = 30;
    }

// need a function in order to see the results of the user

 function showResults() {
    $("#correct-holder").show();
    $("#correct-holder").html("Correct: " + correct);
    $("#incorrect-holder").show();
    $("#incorrect-holder").html("Incorrect: " + incorrect);
    $("#unanswered-holder").show();
    $("#unanswered-holder").html("Unanswered: " + unanswered);
    $("#restart-holder").show();
    $("#restart-holder").html("If you want to play again, press the start button!");
}

});



