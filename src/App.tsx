import React, {useState} from 'react';
import './App.css';

import {Game, gameProps} from "./Game";
import Result from "./Result";


const gameSteps: gameProps[] = [
    {
        question: 'aaa',
        options: ['a', 'aa'],
        correct: 0
    },
    {
        question: 'bbb',
        options: ['b', 'b'],
        correct: 0
    },
]
function App() {
    const [step, setStep] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [answers, setAnswers] = useState(Array<number>)
    let result = 0;
    const chooseOption = function (index: number): void {
        let answersCopy: number[] = [...answers];
        answersCopy[step] = index;
        setAnswers([...answersCopy]);
        console.log(answers);
    }
    const handleResult = function (): void {
        let correctAnswers: number = gameSteps.filter((step, index) => {
            return step.correct === answers[index]
        }).length;
        result = (correctAnswers / gameSteps.length);
        setShowResult(true);
    }
    if (!showResult) {
        return (
            <>
                <Game gameStep={gameSteps[step]} chooseOption={chooseOption}></Game>
                <button onClick={() => setStep(step - 1)} disabled={step === 0}>Prev</button>
                <button onClick={() => setStep(step + 1)} disabled={step === gameSteps.length - 1}>Next</button>
                <button onClick={handleResult}>submit</button>
            </>
        )
    } else {
        return (
            <Result result={result}></Result>
        )
    }
}

export default App;
