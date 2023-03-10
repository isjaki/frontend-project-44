import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

export const getRandomNumber = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

export function playGame(gameText, prepareGameData) {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameText);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const [question, correctAnswer] = prepareGameData();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== String(correctAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
}
