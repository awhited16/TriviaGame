
// set variables
var countdown = 60;
var correct = 0;
var incorrect = 0;
var unanswered = 0;


$("#start").on("click", function() {

    // start timer
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    // replace button with timer
    $("#intro").text("Time Remaining: " + countDown);
});


// function to count down timer
function decrement() {

    countDown--;

    // if timer reaches zero, game is over
    if (countDown === 0) {
        $("#intro").html("<h2>Time's up!</h2><br>Correct answers: " + correct + "<br>Incorrect answers: " + incorrect + "<br>Unanswered: " + unanswered);
    }
}

// submit button to end game

$("submit").on("click", function() {
    $("#intro").html("<h2>Congratulations!</h2><br>Correct answers: " + correct + "<br>Incorrect answers: " + incorrect + "<br>Unanswered: " + unanswered);
}

// if form, prevent default?
