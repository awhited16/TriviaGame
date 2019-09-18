$(document).ready(function() {


    // set variables
    var countdown = 60;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    var trivia = [{
        question: "What is a group of porcupines called?",
        choices: ["A troop", "A prickle", "A colony", "A husk"],
        name: "porcupines",
        answer: "A prickle"
    }, {
        question: "Which animal was once mayor of a town in Alaska for 20 years?",
        choices: ["A lizard", "A bear", "A cat", "A dog"],
        name: "cat",
        answer: "A cat"
    }, {
        question: "On average, how many glasses of milk does a cow give in it's lifetime?",
        choices: ["1,000", "50,000", "200,000", "1 million"],
        name: "cows",
        answer: "200,000"
    }, {
        question: "How many noses does a slug have?",
        choices: ["One", "Two", "Four", "Six"],
        name: "slugs",
        answer: "Four"
    }, {
        question: "What is the only animal that cannot jump?",
        choices: ["Elephant", "Penguin", "Anteater", "Sloth"],
        name: "elephants",
        answer: "Elephant"
    }, {
        question: "A snail can sleep for...",
        choices: ["48 hours", "One week", "Nine Months", "Three Years"],
        name: "snails",
        answer: "Three Years"
    }, {
        question: "On average, domestic cats spend about what percentage of their time sleeping?",
        choices: ["40%", "50%", "60%", "70%"],
        name: "cats",
        answer: "70%"
    }, {
        question: "The heart of a shrimp is located in its...",
        choices: ["Tail", "Body", "Head", "Thorax"],
        name: "shrimp",
        answer: "Head"
    }, {
        question: "What is a group of flamingos called?",
        choices: ["A pace", "A congregation", "A gam", "A flamboyance"],
        name: "flamingos",
        answer: "A flamboyance"
    }, {
        question: "The most popular dog name is...",
        choices: ["Max", "Buddy", "Rex", "Duke"],
        name: "dogs",
        answer: "Max"
    }];


    $("#start").on("click", function() {

        // replace button with timer and trivia
        $("#start").hide();
        displayTrivia();
        $("#submit").html("<button>Submit</button>");
        console.log(countdown)
        $("#intro").html("<h2>Time Remaining: " + countdown + "</h2>");

        var intervalId;

        // start timer
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);

        function decrement() {
    
            countdown--;
            $("#intro").html("<h2>Time Remaining: " + countdown + "</h2>");
        
            if (countdown === 0) {
                $("#trivia").hide();
                $("#submit").hide();
                $("#intro").text("Time's Up!");
                clearInterval(countdown);
            }
        }    

    });

    var labels = ["first", "second", "third", "forth"];


    function displayTrivia () {
        // loop through the 10 questions 
        for (var i = 0; i < 10; i++) {
            var qDiv = $("<div>").attr('id','q'+(i+1));
            qDiv.append("<br>" + trivia[i].question + "<br>");
            // loops through answers for each radio button
            for (var j = 0; j <= 3; j++) {
                if(trivia[i].choices[j] === trivia[i].answer) {
                    var isCorrect = true;
                } else {
                    var isCorrect = false;
                }

                qDiv.append("<input type='radio' choice='" + trivia[i].choices[j] + "' value='" + isCorrect + "'> " + trivia[i].choices[j] + "<br>");
                $("#trivia").append(qDiv);
            }
        }
        
    }


    // submit button to end game
    $("#submit").on("click", function() {
        var children = $("#q1").children("input:checked");
        console.log(children);
        console.log(children[0].attributes[1].value);
        var choice1 = children[0].attributes[1].value;
        if (choice1 === trivia[0].answer) {
            console.log("correct");
            correct++
        } else if (choice1 !== trivia[0].answer) {
            console.log("wrong!");
            incorrect++;
        }

        var children = $("#q2").children("input:checked");
        console.log(children);
        console.log(children[0].attributes[1].value);
        var choice2 = children[0].attributes[1].value;
        if (choice2 === trivia[1].answer) {
            console.log("correct");
            correct++
        }
        else {
            console.log("wrong!");
            incorrect++;
        }

        var children = $("#q3").children("input:checked");
        console.log(children);
        console.log(children[0].attributes[1].value);
        var choice3 = children[0].attributes[1].value;
        if (choice3 === trivia[2].answer) {
            console.log("correct");
            correct++
        }
        else {
            console.log("wrong!");
            incorrect++;
        }

        var children = $("#q4").children("input:checked");
        console.log(children);
        console.log(children[0].attributes[1].value);
        var choice4 = children[0].attributes[1].value;
        if (choice4 === trivia[3].answer) {
            console.log("correct");
            correct++
        }
        else {
            console.log("wrong!");
            incorrect++;
        }

        var children = $("#q5").children("input:checked");
        console.log(children);
        console.log(children[0].attributes[1].value);
        var choice5 = children[0].attributes[1].value;
        if (choice5 === trivia[4].answer) {
            console.log("correct");
            correct++
        }
        else {
            console.log("wrong!");
            incorrect++;
        }

        var children = $("#q6").children("input:checked");
        console.log(children);
        console.log(children[0].attributes[1].value);
        var choice6 = children[0].attributes[1].value;
        if (choice6 === trivia[5].answer) {
            console.log("correct");
            correct++
        }
        else {
            console.log("wrong!");
            incorrect++;
        }

        var children = $("#q7").children("input:checked");
        console.log(children);
        console.log(children[0].attributes[1].value);
        var choice7 = children[0].attributes[1].value;
        if (choice7 === trivia[6].answer) {
            console.log("correct");
            correct++
        }
        else {
            console.log("wrong!");
            incorrect++;
        }

        var children = $("#q8").children("input:checked");
        console.log(children);
        console.log(children[0].attributes[1].value);
        var choice8 = children[0].attributes[1].value;
        if (choice8 === trivia[7].answer) {
            console.log("correct");
            correct++
        }
        else {
            console.log("wrong!");
            incorrect++;
        }

        var children = $("#q9").children("input:checked");
        console.log(children);
        console.log(children[0].attributes[1].value);
        var choice9 = children[0].attributes[1].value;
        if (choice9 === trivia[8].answer) {
            console.log("correct");
            correct++
        }
        else {
            console.log("wrong!");
            incorrect++;
        }

        var children = $("#q10").children("input:checked");
        console.log(children);
        console.log(children[0].attributes[1].value);
        var choice10 = children[0].attributes[1].value;
        if (choice10 === trivia[9].answer) {
            console.log("correct");
            correct++;
        }
        else {
            console.log("wrong!");
            incorrect++;
        }

        $("#trivia").hide();
        $("#submit").hide();
        $("#intro").hide();
        clearInterval(countdown);

        $("#stats").html("<h2>Congratulations!</h2>");
        $("#stats").append("<p>Correct answers: " + correct + "</p>");
        $("#stats").append("<p>Incorrect answers: " + incorrect + "</p>");
        $("#stats").append("<p>Unanswered: " + unanswered + "</p>");
    });

});