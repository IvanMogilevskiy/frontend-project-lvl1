import { cons } from '@hexlet/pairs';
import playBrainGames from '../index.js';
import getRandomInt from './randomizer.js';

const playBrainEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const QAPairs = [];

  const generateQA = () => {
    for (let i = 0; i < 3; i += 1) {
      const number = getRandomInt(0, 30);
      const isEven = () => number % 2 === 0;
      const question = `${number}`;
      const correctAnswer = isEven(number) ? 'yes' : 'no';
      const QAPair = cons(question, correctAnswer);

      QAPairs.push(QAPair);
    }
  };
  generateQA();
  const inputForEngine = cons(rules, QAPairs);
  playBrainGames(inputForEngine);
};

export default playBrainEven;
