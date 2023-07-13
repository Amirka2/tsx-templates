import React from 'react';


export type gameProps = {
    question: string,
    options: string[],
    correct: number
}
export function Game(props: gameProps) {
    const options = props.options.map((op: string) =>
            <div>{op}</div>
    );
    return (
        <div>
            <h3>{props.question}</h3>
            {options}
        </div>
    );
}
