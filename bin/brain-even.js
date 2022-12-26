#!/usr/bin/env node

import { getRandomNumber, playGame } from '../src/index.js';

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const question = getRandomNumber(1, 100);
const correctAnswer = getCorrectAnswer(question);

playGame(question, correctAnswer);
