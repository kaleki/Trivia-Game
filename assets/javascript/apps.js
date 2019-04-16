window.onload = function() {
    $("#tipOff").on("click", stopwatch.start);
    $(".choice").on("click", stopwatch.correctCount);
    $("#doneBtn").on("click", stopwatch.stop);
    $("restartBtn").on("click", stopwatch.reset);
};
var intervalId;
var clockRunning = false;
var rightAnswers = 0;

var stopwatch = {

    
    time: 60,

    correctCount: function() {
        
        
        if (clockRunning) {
            var selection = $(this).val().trim();
            if (selection === "correct" && rightAnswers < 8) {
                rightAnswers++
            }

            
            else if (rightAnswers > 7) {
                stopwatch.stop();
            }
        }

        
        else if (!clockRunning) {
            event.preventDefault();
        }
    },

    
    reset: function() {

        
        stopwatch.stop();
        stopwatch.time = 60;
        rightAnswers = 0;
        $("#timeLeft").text("1:00");
        $("input[type='radio']").prop('checked', false);
    },

    
    start: function() {
        if (!clockRunning) {
            intervalId = setInterval(stopwatch.count, 1000);
            clockRunning = true;
        }
    },

    
    stop: function() {
        clearInterval(intervalId);
        clockRunning = false;

        
        $("#timeLeft").html("Score:" + rightAnswers + "/8");
    },

    
    count: function() {

        
        if (stopwatch.time > 0) {
            stopwatch.time--;
            var converted = stopwatch.timeConverter(stopwatch.time);

           
            $("#timeLeft").text(converted);
        }

        
        else {
            stopwatch.stop();
        }
    },

    
    timeConverter: function(t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
        }
};                
       