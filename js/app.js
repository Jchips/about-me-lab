// THE CODE WITHOUT FUNCTIONS
'use strict';

let userName = prompt('what\'s your name fam?');
alert('Hello ' + userName + '. Welcome.');

let correctAnswers = 0;

alert('let\'s play a guessing game.\nAnswer with \'yes\', \'y\', \'no\' or \'n\' for each question!');
let question1 = document.getElementById('q1');
let userResponse1 = prompt(question1.textContent).toLowerCase();

if (userResponse1 === 'yes' || userResponse1 === 'y') {
  // console.log("You are correct");
  alert('You are correct');
  correctAnswers++;
  console.log('correct: ' + correctAnswers);
} else if (userResponse1 !== 'yes' && userResponse1 !== 'y' && userResponse1 !== 'no' && userResponse1 !== 'n') {
  alert('please respond with either \'yes\', \'y\', \'no\' or \'n\' next time');
  // console.log('please respond with either \'yes\', \'y\', \'no\' or \'n\' next time');
} else {
  alert('you are WRONG');
}

// let userResponse2 = prompt('can I do a backflip?');
let question2 = document.getElementById('q2');
let userResponse2 = prompt(question2.textContent).toLowerCase();
if (userResponse2 === 'no' || userResponse2 === 'n') {
  alert('You are correct');
  correctAnswers++;
  console.log('correct: ' + correctAnswers);
} else if (userResponse2 !== 'yes' && userResponse2 !== 'y' && userResponse2 !== 'no' && userResponse2 !== 'n') {
  alert('please respond with either \'yes\', \'y\', \'no\' or \'n\' next time');
  // console.log('please respond with either \'yes\', \'y\', \'no\' or \'n\' next time');
} else {
  alert('you are WRONG');
}

// let userResponse3 = prompt('do I have a Samsung phone?');
let question3 = document.getElementById('q3');
let userResponse3 = prompt(question3.textContent).toLowerCase();
if (userResponse3 === 'yes' || userResponse3 === 'y') {
  alert('You are correct');
  correctAnswers++;
  console.log('correct: ' + correctAnswers);
} else if (userResponse3 !== 'yes' && userResponse3 !== 'y' && userResponse3 !== 'no' && userResponse3 !== 'n') {
  alert('please respond with either \'yes\', \'y\', \'no\' or \'n\' next time');
  // console.log('please respond with either \'yes\', \'y\', \'no\' or \'n\' next time');
} else {
  alert('you are WRONG');
}

// let userResponse4 = prompt('do I like to dance?');
let question4 = document.getElementById('q4');
let userResponse4 = prompt(question4.textContent).toLowerCase();
if (userResponse4 === 'yes' || userResponse4 === 'y') {
  alert('You are correct');
  correctAnswers++;
  console.log('correct: ' + correctAnswers);
} else if (userResponse4 !== 'yes' && userResponse4 !== 'y' && userResponse4 !== 'no' && userResponse4 !== 'n') {
  alert('please respond with either \'yes\', \'y\', \'no\' or \'n\' next time');
  // console.log('please respond with either \'yes\', \'y\', \'no\' or \'n\' next time');
} else {
  alert('you are WRONG');
}

// let question5 = prompt('do I like ice cream?');
let question5 = document.getElementById('q5');
let userResponse5 = prompt(question5.textContent).toLowerCase();
if (userResponse5 === 'no' || userResponse5 === 'n') {
  alert('You are correct');
  correctAnswers++;
  console.log('correct: ' + correctAnswers);
} else if (userResponse5 !== 'yes' && userResponse5 !== 'y' && userResponse5 !== 'no' && userResponse5 !== 'n') {
  alert('please respond with either \'yes\', \'y\', \'no\' or \'n\' next time');
  // console.log('please respond with either \'yes\', \'y\', \'no\' or \'n\' next time');
} else {
  alert('you are WRONG');
}

// user guesses how many siblings I have
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

// User guesses one of the states that I've been to
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

alert('you got ' + correctAnswers + ' answers correct out of 7');

alert('ok ' + userName + '. That was fun. Read my bio to learn more about me');

// CODE WITH FUNCTIONS
// 'use strict';

// window.addEventListener('load', init);

// function init() {
//   let userName = prompt('what\'s your name fam?');
//   alert('Hello ' + userName + '. Welcome.');

//   let correctAnswers = 0;

//   correctAnswers = guessingGame(correctAnswers);
//   correctAnswers = guessNum(correctAnswers);
//   correctAnswers = guessStates(correctAnswers);

//   alert('you got ' + correctAnswers + ' answers correct out of 7');

//   alert('ok ' + userName + '. That was fun. Read my bio to learn more about me');

//   let button = document.getElementById('btn');
//   button.addEventListener('click', displayAnswers);
// }

// // Runs the guessing game to play with the user
// function guessingGame(correctAnswers) {
//   alert('let\'s play a guessing game.\nAnswer with \'yes\', \'y\', \'no\' or \'n\' for each question!');
//   let question1 = document.getElementById('q1');
//   let userResponse1 = prompt(question1.textContent);
//   let a1Q1 = 'yes';
//   let a2Q1 = 'y';
//   correctAnswers = response(correctAnswers, userResponse1, a1Q1, a2Q1);
//   let question2 = document.getElementById('q2');
//   let userResponse2 = prompt(question2.textContent);
//   let a1Q2 = 'no';
//   let a2Q2 = 'n';
//   correctAnswers = response(correctAnswers, userResponse2, a1Q2, a2Q2);
//   let question3 = document.getElementById('q3');
//   let userResponse3 = prompt(question3.textContent);
//   let a1Q3 = 'yes';
//   let a2Q3 = 'y';
//   correctAnswers = response(correctAnswers, userResponse3, a1Q3, a2Q3);
//   let question4 = document.getElementById('q4');
//   let userResponse4 = prompt(question4.textContent);
//   let a1Q4 = 'yes';
//   let a2Q4 = 'y';
//   correctAnswers = response(correctAnswers, userResponse4, a1Q4, a2Q4);
//   let question5 = document.getElementById('q5');
//   let userResponse5 = prompt(question5.textContent);
//   let a1Q5 = 'no';
//   let a2Q5 = 'n';
//   correctAnswers = response(correctAnswers, userResponse5, a1Q5, a2Q5);
//   return correctAnswers;
// }

// // Evaluates the users' response to the guessing game questions
// function response(correctAnswers, userResponse, answer1, answer2) {
//   userResponse = userResponse.toLowerCase();
//   if (userResponse === answer1 || userResponse === answer2) {
//     alert('You are correct');
//     // console.log('you are correct');
//     correctAnswers++;
//     console.log('correct: ' + correctAnswers);
//   } else if (userResponse !== 'yes' && userResponse !== 'y' && userResponse !== 'no' && userResponse !== 'n') {
//     alert('please respond with either \'yes\', \'y\', \'no\' or \'n\' next time');
//     // console.log('please respond with either \'yes\', \'y\', \'no\' or \'n\' next time');
//   } else {
//     alert('sorry, you are WRONG');
//     // console.log('sorry, you are WRONG');
//   }
//   return correctAnswers;
// }

// // Displays the answers to my guessing game questions
// function displayAnswers() {
//   let answers = document.getElementById('answers');
//   let orderedList = document.createElement('ol');
//   let li1 = document.createElement('li');
//   li1.innerHTML = 'yes, I love R&B';
//   let li2 = document.createElement('li');
//   li2.textContent = 'I only wish I could do a backflip...';
//   let li3 = document.createElement('li');
//   li3.textContent = 'yes, Samsung all day';
//   let li4 = document.createElement('li');
//   li4.textContent = 'yeah';
//   let li5 = document.createElement('li');
//   li5.textContent = 'I do not like ice cream';
//   orderedList.appendChild(li1);
//   orderedList.appendChild(li2);
//   orderedList.appendChild(li3);
//   orderedList.appendChild(li4);
//   orderedList.appendChild(li5);
//   answers.appendChild(orderedList);
// }

// // has user guess how many siblings I have
// function guessNum(correctAnswers) {
//   let siblingsAnswer = 7;
//   for (let i = 0; i < 4; i++) {
//     let num = prompt('guess how many siblings I have (enter a number). You have ' + (4 - i) + ' guesses left');
//     num = parseInt(num);
//     if (num > siblingsAnswer) {
//       alert('too high');
//     } else if (num < siblingsAnswer) {
//       alert('too low');
//     } else if (num === siblingsAnswer) {
//       alert('you guessed it!');
//       correctAnswers++;
//       console.log('correct: ' + correctAnswers);
//       break;
//     } else {
//       alert('please enter a number next time');
//     }
//   }
//   alert('I have ' + siblingsAnswer + ' siblings.');
//   return correctAnswers;
// }

// // has user guess which states I've been to
// function guessStates(correctAnswers) {
//   let states = ['washington', 'texas', 'california', 'idaho', 'oregon'];
//   let guessed = false;
//   for (let i  = 0; i < 6; i++) {
//     let guess = prompt('Guess one of the states I\'ve been to in the USA. You have '
//     + (6 - i) + ' guesses left').toLowerCase();
//     for (let j = 0; j < states.length; j++) {
//       if (guess === states[j]) {
//         alert('yeah, that\'s one of them');
//         correctAnswers++;
//         console.log('correct: ' + correctAnswers);
//         guessed = true;
//         break;
//       }
//     }
//     if (guessed) {
//       break;
//     } else {
//       guess = alert('nope!');
//     }
//   }
//   let statesList = 'I\'ve been to: ';
//   for (let i = 0; i < states.length - 1; i++) {
//     statesList += states[i] + ', ';
//   }
//   statesList += states[states.length - 1] + '.';
//   alert(statesList);
//   return correctAnswers;
// }



