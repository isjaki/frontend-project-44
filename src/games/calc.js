import { playGame, getRandomNumber } from '../index.js';

const GAME_TEXT = 'What is the result of the expression?';

const calculate = (a, b, operation) => {
  switch (operation) {
    case '+':
      return Number(a) + Number(b);
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
};

const getRandomOperation = () => {
  const OPERATIONS = ['+', '-', '*'];
  const operationIndex = getRandomNumber(0, OPERATIONS.length - 1);
  return OPERATIONS[operationIndex];
};

const getQuestion = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);

  const operation = getRandomOperation();

  return `${a} ${operation} ${b}`;
};

const getCorrectAnswer = (question) => {
  const [a, operation, b] = question.split(' ');

  return calculate(a, b, operation);
};

const playCalcGame = () => playGame(GAME_TEXT, getQuestion, getCorrectAnswer);

export default playCalcGame;
