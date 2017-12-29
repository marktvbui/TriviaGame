var panel = $('#quiz-area');
var startingTimer = 10;

var questions = [{
    question: 'Who owns the flaming sword?',
    answers: ['Jaime','Jon', 'Joffrey', 'Beric'],
    correctAnswer: 'Beric',
    image: 'assets/images/flamingSword.gif'
}, {
    question: 'Who is the biggest threat?',
    answers: ['Cersei', 'Arya', 'White Walkers', 'Daenerys'],
    correctAnswer: 'White Walkers',
    image: 'assets/images/whiteWalker.gif'
}, {
    question: 'Who has the best claim to the Iron Throne?',
    answers: ['Cersei', 'Jon Snow', 'Little Finger', 'Daenerys'],
    correctAnswer: 'Jon Snow',
    image: 'assets/images/JonSnow.gif'
}, {
    question: 'Which is not a Valyrian Sword?',
    answers: ['Excalibur', 'Longclaw', 'Heartsbane', 'Ice'],
    correctAnswer: 'Excalibur',
    image: 'assets/images/excalibur.gif'
}, {
    question: 'Which is not an original house of the 7 kingdoms?',
    answers: ['Stark', 'Targaryen', 'Lannister', 'Tyrell'],
    correctAnswer: 'Targaryen',
    image: 'assets/images/daenerys.gif'
}, {
    question: 'Who did not serve as Hand of the King?',
    answers: ['Eddard Stark', 'Tyrion Lannister', 'Jon Arryn', 'Samwell Tarley'],
    correctAnswer: 'Samwell Tarley',
    image: 'assets/images/samwell.gif'
}];

var timer;

var game = {

  questions: questions,
  currentQuestion: 0,
  counter: startingTimer,
  correct: 0,
  incorrect: 0,

  countdown: function() {
    game.counter--;
    $("#counter-number").text(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.timeUp();
    }
  },

  loadQuestion: function() {

    timer = setInterval(game.countdown, 1000);

    panel.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

    for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
      panel.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
      + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
    }
  },

  nextQuestion: function() {
    game.counter = startingTimer;
    $("#counter-number").text(game.counter);
    game.currentQuestion++;
    game.loadQuestion();
  },

  timeUp: function() {

    clearInterval(timer);

    $("#counter-number").html(game.counter);

    panel.html("<h2>Out of Time!</h2>");
    panel.append("<h3>The Correct Answer is: " + questions[this.currentQuestion].correctAnswer);
    panel.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  results: function() {

    clearInterval(timer);

    panel.html("<h2>Game Over! This is how you fared: </h2>");

    $("#counter-number").text(game.counter);

    panel.append("<h3>Correct Answers: " + game.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (game.incorrect + game.correct)) + "</h3>");
    panel.append("<br><button id='start-over'>Start Over?</button>");
  },

  clicked: function(e) {
    clearInterval(timer);
    if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
      this.answeredCorrectly();
    }
    else {
      this.answeredIncorrectly();
    }
  },

  answeredIncorrectly: function() {

    game.incorrect++;

    clearInterval(timer);

    panel.html("<h2>Idiot!</h2>");
    panel.append("<h3>The Correct Answer is: " + questions[game.currentQuestion].correctAnswer + "</h3>");
    panel.append("<img src='" + questions[game.currentQuestion].image + "' />");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  answeredCorrectly: function() {

    clearInterval(timer);

    game.correct++;

    panel.html("<h2>Lucky Guess!</h2>");
    panel.append("<img src='" + questions[game.currentQuestion].image + "' />");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  reset: function() {
    this.currentQuestion = 0;
    this.counter = startingTimer;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};

// CLICK EVENTS

$(document).on("click", "#start-over", function() {
  game.reset();
});

$(document).on("click", ".answer-button", function(e) {
  game.clicked(e);
});

$(document).on("click", "#start", function() {
  $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>10</span> Seconds</h2>");
  game.loadQuestion();
});;