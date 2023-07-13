import React from 'react';


type gameProps = {
    question: string,
    options: string[],
    correct: number
}
function Game(props: gameProps) {
    return (
        <div>
            <h3>{props.question}</h3>
            {props.options.map((op: string) => {
                return (<div>
                            {op}
                        </div>)
            })}
        </div>
    );
}

export default Game;