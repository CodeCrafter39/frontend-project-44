import makeGame from "../index.js";

export const progressGame = () => {

    console.log('What number is missing in the progression?');
    const round = 3;
    let questions = [];
    let correctAnswers = [];

    function generateProgression(length, start, step) {
        const progression = [];
        for (let i = 0; i < length; i++) {
            progression.push(start + i * step);
        }
        return progression;    
    }

    for (let i = 0; i < round; i++) {
    const length = 10; // Фиксированная длина
    const start = Math.floor(Math.random() * 20) + 1;
    const step = Math.floor(Math.random() * 10) + 1;
    const hiddenIndex = Math.floor(Math.random() * length);
    const progression = generateProgression(length, start, step);

    correctAnswers.push(progression[hiddenIndex].toString());
    progression[hiddenIndex] = '..';

    questions.push(progression.join(' '));

    }


    makeGame(questions, correctAnswers, 'What number is missing in the progression?');
};