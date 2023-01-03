import { getRandomNumber, playGame } from '../index.js';

const GAME_TEXT = 'What number is missing in the progression?';

const generateProgression = (startNumber, step, length) => {
  const progression = [];
  let currentNumber = startNumber;

  for (let i = 0; i < length; i += 1) {
    progression.push(currentNumber);
    currentNumber += step;
  }

  return progression;
};

const prepareGameData = () => {
  const progressionStart = getRandomNumber(1, 50);
  const progressionStep = getRandomNumber(1, 10);
  const progressionLength = getRandomNumber(5, 10);

  const progression = generateProgression(progressionStart, progressionStep, progressionLength);

  const randomIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

const playProgressionGame = () => playGame(GAME_TEXT, prepareGameData);

export default playProgressionGame;
