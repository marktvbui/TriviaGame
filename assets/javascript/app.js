$(document).ready(function() {
var countDown = 100;
var correct = 0;
var wrong = 0;
var na = 0;
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
function timer(){
  $('#timer').html('<h2>Remaining Time: ' + countDown +'</h2>');
};

function question() {
  $('#questions').append('<h3>' + quiz.question + '</h3>');
  for (i = 0; i < quiz.answers.length; i++) {
    $('#questions').append('<h4>' + quiz.answers[i].answer + '</h4>').prop('checked', true);
  }
};

timer();
question();

});