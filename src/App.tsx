import React, {useState} from 'react';
import './App.css';

import {Game , gameProps} from "./Game";
import Result from "./Result";


const gameSteps: gameProps[] = [
    {   question: 'aaa',
        options: ['a', 'aa'],
        correct: 0  },
    {   question: 'bbb',
        options: ['b', 'b'],
        correct: 0  },
]

function App() {
    const [step, setStep] = useState(0);
  return (
    <div className="App">
        <Game question={gameSteps[step].question} options={gameSteps[step].options} correct={gameSteps[step].correct}></Game>
      {/*<Result result={1/10}></Result>*/}
        <button onClick={() => setStep(step - 1)} disabled={step === 0}>Prev</button>
        <button onClick={() => setStep(step + 1)} disabled={step === gameSteps.length - 1}>Next</button>
    </div>
  );
}

export default App;
