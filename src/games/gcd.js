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

const prepareGameData = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);

  const question = `${a} ${b}`;
  const correctAnswer = getGcd(a, b);

  return [question, correctAnswer];
};

const playGcdGame = () => playGame(GAME_TEXT, prepareGameData);

export default playGcdGame;
