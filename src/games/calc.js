import { playGame, getRandomNumber } from '../index.js';

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

const prepareGameData = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);
  const operationIndex = getRandomNumber(0, OPERATIONS.length - 1);
  const operation = OPERATIONS[operationIndex];

  const question = `${a} ${operation} ${b}`;
  const correctAnswer = getCorrectAnswer(a, b, operation);

  return [question, correctAnswer];
};

const playCalcGame = () => playGame(prepareGameData);

export default playCalcGame;
