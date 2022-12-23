#!/usr/bin/env node

import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

const isEven = (number) => number % 2 === 0;

const getRandomNumber = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

function startGame() {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const number = getRandomNumber(1, 100);

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(number);

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
}

startGame();
