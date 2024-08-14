import makeGame from '../index.js';
import getRandomInt from './utils.js';

function generateProgression(length, start, step) {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
}

const getData = () => {
  const length = 10;
  const start = getRandomInt(1, 20);
  const step = getRandomInt(1, 10);
  const hiddenIndex = getRandomInt(0, length - 1);
  const progression = generateProgression(length, start, step);
  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const instruction = 'What number is missing in the progression?';

const startProgressGame = () => {
  makeGame(getData, instruction);
};

export default startProgressGame;
