$(document).ready(function() {


    // set variables
    var countdown = 60;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    var trivia = [{
        question: "What is a group of porcupines called?",
        choices: ["A troop", "A prickle", "A colony", "A husk"],
        answer: 1
    }, {
        question: "Which animal was once mayor of a town in Alaska for 20 years?",
        choices: ["A lizard", "A bear", "A cat", "A dog"],
        answer: 2
    }, {
        question: "On average, how many glasses of milk does a cow give in it's lifetime?",
        choices: ["1,000", "50,000", "200,000", "1 million"],
        answer: 2
    }, {
        question: "How many noses does a slug have?",
        choices: ["One", "Two", "Four", "Six"],
        answer: 2
    }, {
        question: "What is the only animal that cannot jump?",
        choices: ["Elephant", "Penguin", "Anteater", "Sloth"],
        answer: 0
    }, {
        question: "A snail can sleep for...",
        choices: ["48 hours", "One week", "Nine Months", "Three Years"],
        answer: 3
    }, {
        question: "On average, domestic cats spend about what percentage of their time sleeping?",
        choices: ["40%", "50%", "60%", "70%"],
        answer: 3
    }, {
        question: "The heart of a shrimp is located in its...",
        choices: ["Tail", "Body", "Head", "Thorax"],
        answer: 2
    }, {
        question: "What is a group of flamingos called?",
        choices: ["A pace", "A congregation", "A gam", "A flamboyance"],
        answer: 3
    }, {
        question: "The most popular dog name is...",
        choices: ["Max", "Buddy", "Rex", "Duke"],
        answer: 0
    }];


    $("#start").on("click", function() {

        // replace button with timer and trivia
        $("#start").hide();
        displayTrivia();

        // start timer
        clearInterval(countdown);
        countdown = setInterval(decrement, 1000);

        function decrement() {
    
            countdown--;
        
            $("#intro").html("<h2>Time Remaining: " + countdown + "</h2>");
        
            if (countdown === 0) {
                $("#trivia").hide();
                $("#intro").text("Time's Up!");
                clearInterval(countdown);
            }
        }    

    });

    var labels = ["first", "second", "third", "forth"];


    function displayTrivia () {

        // $("#trivia").empty();
        // loop through the 10 questions 
        for (var i = 0; i < 10; i++) {
            $("#trivia").append(trivia[i].question);
            // loops through answers for each radio button
            for (var j = 0; j <= 3; j++) {
                $("#trivia").append("<input type='radio' name='" + trivia[i].name + " value='" + trivia[i].value + ">" + trivia[i].choices[j] + "<br>");
            }
        }
        
    }


    // submit button to end game

    $("submit").on("click", function() {
        
        // $("input[name="variable"]:checked").value;

        $("#trivia").hide();

        unanswered
        correct = score / 25;
        incorrect = 10 - correct;
        unanswered = 

        $("#intro").html("<h2>Congratulations!</h2><br>Correct answers: " + correct + "<br>Incorrect answers: " + incorrect + "<br>Unanswered: " + unanswered);
    });

    // if form, prevent default?

});