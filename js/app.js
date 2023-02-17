'use strict';

window.addEventListener('load', init);

function init() {
  let answerChoicesNo = answersNo();
  console.log(answerChoicesNo[0]);
  
  let answerChoicesYes = answersYes();
  console.log(answerChoicesYes[0]);

  let userName = prompt('what\'s your name fam?');
  alert('Hello ' + userName + '. Welcome.');

  let correctAnswers = 0;

  correctAnswers = guessingGame(correctAnswers, answerChoicesYes, answerChoicesNo);
  correctAnswers = guessNum(correctAnswers);
  correctAnswers = guessStates(correctAnswers);

  alert('you got ' + correctAnswers + ' answers correct out of 7');

  alert('ok ' + userName + '. That was fun. Read my bio to learn more about me');

  let button = document.getElementById('btn');
  button.addEventListener('click', displayAnswers);
}




// Runs the guessing game to play with the user
function guessingGame(correctAnswers, answerChoicesYes, answerChoicesNo) {
  alert('let\'s play a guessing game.\nAnswer with \'yes\', \'y\', \'no\' or \'n\' for each question!');
  let question1 = document.getElementById('q1');
  let userResponse1 = prompt(question1.textContent);
  
  correctAnswers = response(correctAnswers, userResponse1, answerChoicesYes);
  let question2 = document.getElementById('q2');
  let userResponse2 = prompt(question2.textContent);

  correctAnswers = response(correctAnswers, userResponse2, answerChoicesNo);
  let question3 = document.getElementById('q3');
  let userResponse3 = prompt(question3.textContent);
 
  correctAnswers = response(correctAnswers, userResponse3, answerChoicesYes);
  let question4 = document.getElementById('q4');
  let userResponse4 = prompt(question4.textContent);
 
  correctAnswers = response(correctAnswers, userResponse4, answerChoicesYes);
  let question5 = document.getElementById('q5');
  let userResponse5 = prompt(question5.textContent);
   
  correctAnswers = response(correctAnswers, userResponse5, answerChoicesNo);
  return correctAnswers;
}

function answersNo(){
  let answer1 = 'no';
  let answer2 = 'n';
  return [answer1, answer2];
}

function answersYes(){
  let answer1 = 'yes';
  let answer2 = 'y';
  return [answer1, answer2];
}

// Evaluates the users' response to the guessing game questions
function response(correctAnswers, userResponse, answerChoices) {
  userResponse = userResponse.toLowerCase();
  if (userResponse === answerChoices[0] || userResponse === answerChoices[1]) {
    alert('You are correct');
    // console.log('you are correct');
    correctAnswers++;
    console.log('correct: ' + correctAnswers);
  } else if (userResponse !== 'yes' && userResponse !== 'y' && userResponse !== 'no' && userResponse !== 'n') {
    alert('please respond with either \'yes\', \'y\', \'no\' or \'n\' next time');
    // console.log('please respond with either \'yes\', \'y\', \'no\' or \'n\' next time');
  } else {
    alert('sorry, you are WRONG');
    // console.log('sorry, you are WRONG');
  }
  return correctAnswers;
}

// Displays the answers to my guessing game questions
function displayAnswers() {
  let answers = document.getElementById('answers');
  let orderedList = document.createElement('ol');
  let li1 = document.createElement('li');
  li1.innerHTML = 'yes, I love R&B';
  let li2 = document.createElement('li');
  li2.textContent = 'I only wish I could do a backflip...';
  let li3 = document.createElement('li');
  li3.textContent = 'yes, Samsung all day';
  let li4 = document.createElement('li');
  li4.textContent = 'yeah';
  let li5 = document.createElement('li');
  li5.textContent = 'I do not like ice cream';
  orderedList.appendChild(li1);
  orderedList.appendChild(li2);
  orderedList.appendChild(li3);
  orderedList.appendChild(li4);
  orderedList.appendChild(li5);
  answers.appendChild(orderedList);
}

// has user guess how many siblings I have
function guessNum(correctAnswers) {
  let siblingsAnswer = 7;
  for (let i = 0; i < 4; i++) {
    let num = prompt('guess how many siblings I have (enter a number). You have ' + (4 - i) + ' guesses left');
    num = parseInt(num);
    if (num > siblingsAnswer) {
      alert('too high');
    } else if (num < siblingsAnswer) {
      alert('too low');
    } else if (num === siblingsAnswer) {
      alert('you guessed it!');
      correctAnswers++;
      console.log('correct: ' + correctAnswers);
      break;
    } else {
      alert('please enter a number next time');
    }
  }
  alert('I have ' + siblingsAnswer + ' siblings.');
  return correctAnswers;
}

// has user guess which states I've been to
function guessStates(correctAnswers) {
  let states = ['washington', 'texas', 'california', 'idaho', 'oregon'];
  let guessed = false;
  for (let i  = 0; i < 6; i++) {
    let guess = prompt('Guess one of the states I\'ve been to in the USA. You have '
    + (6 - i) + ' guesses left').toLowerCase();
    for (let j = 0; j < states.length; j++) {
      if (guess === states[j]) {
        alert('yeah, that\'s one of them');
        correctAnswers++;
        console.log('correct: ' + correctAnswers);
        guessed = true;
        break;
      }
    }
    if (guessed) {
      break;
    } else {
      guess = alert('nope!');
    }
  }
  let statesList = 'I\'ve been to: ';
  for (let i = 0; i < states.length - 1; i++) {
    statesList += states[i] + ', ';
  }
  statesList += states[states.length - 1] + '.';
  alert(statesList);
  return correctAnswers;
}



