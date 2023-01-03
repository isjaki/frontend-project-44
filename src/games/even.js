import { playGame, getRandomNumber } from '../index.js';

const GAME_TEXT = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const prepareGameData = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = getCorrectAnswer(question);

  return [question, correctAnswer];
};

const playEvenGame = () => playGame(GAME_TEXT, prepareGameData);

export default playEvenGame;
