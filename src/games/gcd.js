import { playGame, getRandomNumber } from '../index.js';

const GAME_TEXT = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  let currentA = Math.abs(a);
  let currentB = Math.abs(b);

  while (currentA !== currentB) {
    if (currentA > currentB) {
      currentA -= currentB;
    } else {
      currentB -= currentA;
    }
  }

  return currentA;
};

const getQuestion = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);

  return `${a} ${b}`;
};

const getCorrectAnswer = (question) => {
  const [a, b] = question.split(' ');

  return getGcd(a, b);
};

const playGcdGame = () => playGame(GAME_TEXT, getQuestion, getCorrectAnswer);

export default playGcdGame;
