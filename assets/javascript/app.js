$(document).ready(function() {
var time = 15;
var correct = 0;
var wrong = 0;
var na = 0;
var intervalId;
var answer = $('.radio').is(':checked');
var quiz = [{
  question: 'Which is not a weapon in Game of Thrones?',
  answers: [{
    answer: 'Longclaw'
    }, {
    answer: 'Honor'
    }, {
    answer: 'Excalibur'
    }, {
    answer: 'Ice'
    }]
  },
    {
    question: 'Who is not a contender for the Throne?',
    answers: [{
      answer: 'Jon Snow'
    }, {
      answer: 'Daenerys Targaryen'
    }, {
      answer: 'Sam Tarly'
    }, {
      answer: 'Cersei Lannister'
    }]
  },
  {
  question: 'Who is not a Stark?',
  answers: [{
    answer: 'Jon'
    }, {
    answer: 'Bran'
    }, {
    answer: 'Sansa'
    }, {
    answer: 'Arya'
    }]
}];

intervalId = setInterval(count, 1000);
function count() {
  if (time != 0){
    time--;
  $('#timer').html('<h2>Remaining Time: ' + time +'</h2>');
  }
  if (time === 0) {
    $('#timer').html('<h2>Time is UP!!!</h2>');
    $('#questions').html('<h3>Excalibur is not a Weapon in Game of Thrones.</h3>');
    $('#questions').append('<h3>Sam Tarly is not a contender for the Throne.</h3>');
    $('#questions').append('<h3>Jon is not a Stark.</h3>');
    $('#results').css('visibility', 'visible');
    $('#button').css('visibility', 'hidden');
    $('#correct').html('Correctly answered: ' + correct);
    $('#wrong').html('Answered Wrong: ' + wrong);
  }
}

function question() {
  for (j = 0; j < quiz.length; j++) {
    $('#questions').append('<div><form><h3>' + quiz[j].question + '</h3></form></div>');
    for (i = 0; i < quiz[0].answers.length; i++) {
      $('#questions').append('<form><input type="radio" name="answer"  />' + quiz[j].answers[i].answer + '<br />');
    }
  }
};
function results(){
  if ((answer === 'Excalibur') || (answer === 'Sam Tarly') || (answer === 'Jon')) {
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
});

// timer();
question();
results();
count();

});