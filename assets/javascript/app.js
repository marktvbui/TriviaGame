$(document).ready(function() {
var time = 25;
var correct = 0;
var wrong = 0;
var na = 0;
var intervalId;
var answer = 'moe';
var quiz = [{
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
  },
    {
    question: 'Which one of the following is not a princess?',
    answers: [{
      answer: 'Mulan'
    }, {
      answer: 'Elsa'
    }, {
      answer: 'Sophia'
    }, {
      answer: 'Snow White'
    }]
  
}];

intervalId = setInterval(count, 1000);
function count() {
  time--;
  // console.log(time);
  $('#timer').html('<h2>Remaining Time: ' + time +'</h2>');
}
// function timer(){
//   $('#timer').html('<h2>Remaining Time: ' + time +'</h2>');
// };
function question() {
  $('#questions').append('<h3>' + quiz[1].question + '</h3>');
  for (i = 0; i < quiz[1].answers.length; i++) {
    $('#questions').append('<input type="radio" name="test" />').append('<h4>' + quiz[1].answers[i].answer + '</h4>');
  }
};
function question1() {
  $('#questions').append('<h3>' + quiz[0].question + '</h3>');
  for (i = 0; i < quiz[0].answers.length; i++) {
    $('#questions').append('<input type="radio" name="test" />').append('<h4>' + quiz[0].answers[i].answer + '</h4>');
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

// timer();
question1();
question();
results();
count();

});