
'use strict';
let counterGlobal = 0;
let userO;
function welcomMsg(q) {
  userO = prompt(q);
  alert(`Hi , ${userO} welcome to my website`);
}
function userQuestion() {
  let arr = ['Am I a good cook?', 'my favorite Social Media is Facebook ? ', 'Do I Have Pets ? ', 'Is My Best Book "The 5-am Club" ? ', 'My favorite subject in High School is Maths '];
  for (let i = 0; i < arr.length; i++) {
    let userInput = prompt(arr[i]);
    userInput = userInput.toLowerCase();
    while (userInput !== 'yes' && userInput !== 'y' && userInput !== 'no' && userInput !== 'n') {
      userInput = prompt('please enter yes or no || y or n').toLowerCase();
    }
    if ((arr[i] === 'Am I a good cook?' || arr[i] === 'Is My Best Book "The 5-am Club" ? ') && (userInput === 'yes' || userInput === 'y')) {
      alert('correct answer');
      counterGlobal++;
    } else if ((arr[i] === 'my favorite Social Media is Facebook ? ' || arr[i] === 'Do I Have Pets ? ' || arr[i] === 'My favorite subject in High School is Maths ') && (userInput === 'no' || userInput === 'n')) {
      alert('correct answer');
      counterGlobal++;
    } else {
      alert('incorrect answer');
    }
  }
}
function guessNumber(q) {
  let user = prompt(q);
  let guessNum = Math.floor(Math.random() * 7) + 1;
  let counter = 0;
  let tryA = 0;
  while (user === '' || isNaN(user) || user < 1 || user > 7) {
    user = prompt('Please Enter the number between 1 to 7');
  }
  for (let i = 0; i <= tryA; i++) {
    if (tryA === 3) {
      break;
    }
    if (user > guessNum) {
      alert('This Number is too high');
      user = prompt('Try Again To Guess the number from 1 to 7');
      tryA = tryA + 1;
    } else if (user < guessNum) {
      alert('This Number is too low');
      user = prompt('Try Again To Guess the number from 1 to 7');
      tryA = tryA + 1;
    } else {
      alert('Congratulations, you guessed the right number');
      counterGlobal = counterGlobal + 1;
      counter = counter + 1;
      break;
    }
  }
  if (counter === 1) {
    alert(`Thank You The Number is ${guessNum}`);
  } else {
    alert(`Sorry, You can't guess the number the number is ${guessNum}`);
  }
}
function countryQuestion(q) {
  let answer = ['china', 'united states', 'japan', 'united arab emirates', 'south korea', 'australia', 'canada', 'thailand', 'indonesia', 'singapore'];
  let guess = 0;
  let count = 0;
  while (guess < 6) {
    let userAnswer = prompt(q).toLowerCase();
    while (userAnswer === '' || !isNaN(userAnswer)) {
      userAnswer = prompt('Please Enter An Country Name?').toLowerCase();
    }
    guess = guess + 1;
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === userAnswer) {
        alert(`This Answer Is Correct ${answer[i]}`);
        counterGlobal = counterGlobal + 1;
        alert(answer);
        count = count + 1;
        break;
      }
    }
    if (count === 1) {
      break;
    } else if (guess === 6) {
      alert(`Sorry, you can't guess the country this list of countires ${answer}`);
    }
  }
}
for(let i = 0; i < 4; i++){
  if(i === 0) {
    welcomMsg('What\'s Your Name?');
  } else if (i === 1) {
    userQuestion();
  } else if(i === 2) {
    guessNumber('Try To Guess the number from 1 to 7');
  } else {
    countryQuestion('guess One of countries with most Skyscrapers?');
  }
}

alert(`Your Score is ${counterGlobal} Out of 7`);

alert(`Thank You ${userO} , For visit my website`);
