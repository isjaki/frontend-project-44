import { playGame, getRandomNumber } from '../index.js';

const GAME_TEXT = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestion = () => getRandomNumber(1, 100);

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const playEvenGame = () => playGame(GAME_TEXT, getQuestion, getCorrectAnswer);

export default playEvenGame;
