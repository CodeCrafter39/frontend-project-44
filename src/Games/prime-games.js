import makeGame from '../index.js';
import getRandomInt from './utils.js';

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
}

const getData = () => {
  const number = getRandomInt(1, 100);
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startPrimeGame = () => makeGame(getData, instruction);

export default startPrimeGame;
