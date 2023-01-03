import { getRandomNumber, playGame } from '../index.js';

const GAME_TEXT = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

const getCorrectAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

const prepareGameData = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = getCorrectAnswer(question);

  return [question, correctAnswer];
};

const playPrimeGame = () => playGame(GAME_TEXT, prepareGameData);

export default playPrimeGame;
