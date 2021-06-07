
'use strict';

let user = prompt('What\'s Your Name?');


let qOne = prompt('Am I a good cook?').toLocaleLowerCase();

if (qOne === 'yes' || qOne === 'y') {
  console.log('Good Answer I love Cooking So much');
  alert('Good Answer I love Cooking So much');
} else if (qOne === 'no' || qOne === 'n') {
  console.log('Incorrect Answer');
} else {
  alert('please enter yes or no');
}

let qTwo = prompt('my favorite Social Media is Facebook ? ').toLocaleLowerCase();

if (qTwo === 'yes' || qTwo === 'y') {
  console.log('Incorrect Answer');
} else if (qTwo === 'no' || qTwo === 'n') {
  console.log('Correct Answer My favorite social media is SnapChat');
  alert('Correct Answer My favorite social media is SnapChat');
} else {
  alert('please enter yes or no');
}

let qThree = prompt('Do I Have Pets ? ').toLocaleLowerCase();

if (qThree === 'yes' || qThree === 'y') {
  console.log('Incorrect Answer');
} else if (qThree === 'no' || qThree === 'n') {
  console.log('Correct Answer I love Pets But I don\'t have');
  alert('Correct Answer I love Pets But I don\'t have ');
} else {
  alert('please enter yes or no');
}

let qFour = prompt('Is My Best Book "The 5-am Club" ? ').toLocaleLowerCase();

if (qFour === 'yes' || qFour === 'y') {
  console.log('Correct Answer This Book Is Amazing');
  alert('Correct Answer This Book Is Amazing ');
} else if (qFour === 'no' || qFour === 'n') {
  console.log('Incorrect Answer');
} else {
  alert('please enter yes or no');
}

let qFive = prompt('My favorite subject in High School is Maths ').toLocaleLowerCase();

if (qFive === 'yes' || qFive === 'y') {
  console.log('Incorrect Answer');
} else if (qFive === 'no' || qFive === 'n') {
  console.log('Correct Answer My favorite subject was Biology not Maths');
  alert('Correct Answer My favorite subject was Biology not Maths');
} else {
  alert('please enter yes or no');
}

alert(`Hi , ${ user } welcome to my website`);
