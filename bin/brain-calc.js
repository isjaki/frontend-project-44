#!/usr/bin/env node

import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

const getRandomNumber = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

const OPERATIONS = ['+', '-', '*'];

const getCorrectAnswer = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
};

function startGame() {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const a = getRandomNumber(1, 100);
    const b = getRandomNumber(1, 100);
    const operationIndex = getRandomNumber(0, OPERATIONS.length - 1);
    const operation = OPERATIONS[operationIndex];

    console.log(`Question: ${a} ${operation} ${b}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(a, b, operation);

    if (Number(userAnswer) !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
}

startGame();
