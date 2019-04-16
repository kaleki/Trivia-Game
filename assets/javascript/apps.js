$("#btnContainer").on("click", function (){
    game.start();
})
$(document).on("click", "#button", function () {
    game.done();
})

var questions = [{
    question: "What team does Lebron James play for?",  
    answers: ["Cavs ", "Knicks ", "Magic ", "Lakers "],
    correctAnswer: " Lakers "
    }, {
    question: "What is Joel Embiids Nickname?", 
    answers: ["JoJo ", "The Process ", "Joey bad of Doughnuts ", "Joey "],
    correctAnswer: " The Process "
    }, {
    question: "How many NBA teams are in Florida?",  
    answers: ["1 ", "2 ", "3", "4 "], 
    correctAnswer: " 2 "
    }, {
    question: "What team does Steph Curry play for?", 
    answers: ["Magic", "Mavs ", "Warriors ", "Hornets "],
    correctAnswer: " Warriros "
    }, {
    question: "What Team has home games in Canada?", 
    answers: ["Spurs ", "Raptors", "Pacers ", "Heat "],
    correctAnswer: " Raptors "
    }, {
    question: "What team drafted Carmelo Anthony?", 
    answers: ["Lakers ", "Knicks", "Kings ", "Nuggets "],
    correctAnswer: " Nuggets "
    }, {
    question: "How many teams play in California?", 
    answers: ["1 ", "2 ", "3", "4 "],
    correctAnswer: " 4"
    }, {
    question: "How many Championchips does Lebron James have?", 
    answers: ["1", "3 ", "5 ", "6 "],
    correctAnswer: " 3 "
    }, {
   
    }
    ];
    var game = {
        correct: 0,
        incorrect: 0,
        counter: 60,
        countdown: function(){
            game.counter--;
            $("#counter").html(game.counter);
            if (game.counter<=0){
                console.log("Shot Clock Violation");
                game.done();
            }
        }
    }
     start:function () {
        timer = setInterval(play.countdown, 1000);
        $("#subWrapper").prepend("<h2>Time Remaining: <span id='counter'>60</span> Seconds</h2>"); 
        $("#startButton").remove();
        for (var i=0; i < questions.length; i++) {
        $("#subWrapper").append("<h2>"+questions[i].question+"</h2>");
        for (var j=0; j < questions[i].answers.length; j++) {
        $("#subWrapper").append("<input type='radio' name='question-"+i+"' value='+questions[i].answers[j]+'>"+questions[i].answers[j]);
        }