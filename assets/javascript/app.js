$(document).ready(function() {
var time = 25;
var correct = 0;
var wrong = 0;
var na = 0;
var intervalId;
var answer = 'moe';
var quiz = {
  question: 'Who is not one of the three stooges?',
  answers: [{
    answer: 'Moe'
    }, {
    answer: 'Joe'
    }, {
    answer: 'Curly'
    }, {
    answer: 'Larry'
    }]
};

intervalId = setInterval(count, 1000);
function count() {
  time--;
  console.log(time);
  if (time === '0') {
    time;
  }
}
function timer(){
  $('#timer').html('<h2>Remaining Time: ' + time +'</h2>');
};
function question() {
  $('#questions').append('<h3>' + quiz.question + '</h3>');
  for (i = 0; i < quiz.answers.length; i++) {
    $('#questions').append('<h4>' + quiz.answers[i].answer + '</h4>').prop('checked', true);
  }
};
function results() {
  if (answer === 'Joe') {
    wins++;
  }
  else {
    wrong ++;
  }
}

$('#button').click(function() {
  $('#results').css('visibility', 'visible');
  $('#container').css('visibility', 'hidden');
  $('#correct').html('Correctly answered: ' + correct);
  $('#wrong').html('Answered Wrong: ' + wrong);
  $('#na').html('Questions with no answer: ' + na);
});

timer();
question();
results();
count();

});