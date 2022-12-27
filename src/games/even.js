import { playGame, getRandomNumber } from '../index.js';

const isEven = (number) => number % 2 === 0;

const getQuestion = () => getRandomNumber(1, 100);

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const playEvenGame = () => playGame(getQuestion, getCorrectAnswer);

export default playEvenGame;
