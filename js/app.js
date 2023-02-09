'use strict';

window.addEventListener('load', init);

function init() {
  let userName = prompt('what\'s your name fam?');
  alert('Hello ' + userName + '. Welcome.');

  guessingGame();

  alert('ok ' + userName + '. That was fun. Read my bio to learn more about me');

  let button = document.getElementById('btn');
  button.addEventListener('click', displayAnswers);
}

// Runs the guessing game to play with the user
function guessingGame() {
  alert('let\'s play a guessing game.\nAnswer with \'yes\', \'y\', \'no\' or \'n\' for each question!');
  let question1 = document.getElementById('q1');
  let userResponse1 = prompt(question1.textContent);
  let a1Q1 = 'yes';
  let a2Q1 = 'y';
  response(userResponse1, a1Q1, a2Q1);
  let question2 = document.getElementById('q2');
  let userResponse2 = prompt(question2.textContent);
  let a1Q2 = 'no';
  let a2Q2 = 'n';
  response(userResponse2, a1Q2, a2Q2);
  let question3 = document.getElementById('q3');
  let userResponse3 = prompt(question3.textContent);
  let a1Q3 = 'yes';
  let a2Q3 = 'y';
  response(userResponse3, a1Q3, a2Q3);
  let question4 = document.getElementById('q4');
  let userResponse4 = prompt(question4.textContent);
  let a1Q4 = 'yes';
  let a2Q4 = 'y';
  response(userResponse4, a1Q4, a2Q4);
  let question5 = document.getElementById('q5');
  let userResponse5 = prompt(question5.textContent);
  let a1Q5 = 'no';
  let a2Q5 = 'n';
  response(userResponse5, a1Q5, a2Q5);
}

// Evaluates the users' response to the guessing game questions
function response(userResponse, answer1, answer2) {
  userResponse = userResponse.toLowerCase();
  if (userResponse === answer1 || userResponse === answer2) {
    alert('You are correct');
    // console.log('you are correct');
  } else if (userResponse !== 'yes' && userResponse !== 'y' && userResponse !== 'no' && userResponse !== 'n') {
    alert('please respond with either \'yes\', \'y\', \'no\' or \'n\' next time');
    // console.log('please respond with either \'yes\', \'y\', \'no\' or \'n\' next time');
  } else {
    alert('sorry, you are WRONG');
    // console.log('sorry, you are WRONG');
  }
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

// my original code without the functions
//   if (question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'y') {
//     // console.log("You are correct");
//     alert('You are correct');
//   } else if (question1 === '') {
//     alert('please say something fam...');
//   } else {
//     alert('you are WRONG');
//   }
//   let question2 = prompt('can I do a backflip?');
//   if (question2.toLowerCase() === 'no' || question2.toLowerCase() === 'n') {
//     alert('You are correct');
//   } else if (question2 === '') {
//     alert('please say something fam...');
//   } else {
//     alert('you are WRONG');
//   }
//   let question3 = prompt('do I have a Samsung phone?');
//   if (question3.toLowerCase() === 'yes' || question3.toLowerCase() === 'y') {
//     alert('You are correct');
//   } else if (question3 === '') {
//     alert('please say something fam...');
//   } else {
//     alert('you are WRONG');
//   }
//   let question4 = prompt('do I like to dance?');
//   if (question4.toLowerCase() === 'yes' || question4.toLowerCase() === 'y') {
//     alert('You are correct');
//   } else if (question4 === '') {
//     alert('please say something fam...');
//   } else {
//     alert('you are WRONG');
//   }
//   let question5 = prompt('do I like ice cream?');
//   if (question5.toLowerCase() === 'no' || question5.toLowerCase() === 'n') {
//     alert('You are correct');
//   } else if (question5 === '') {
//     alert('please say something fam...');
//   } else {
//     alert('you are WRONG');
//   }

//   alert('ok ' + name + '. That was fun. Read my bio to learn more about me');

