import React, {useState} from 'react';


export type gameProps = {
    question: string,
    options: string[],
    correct: number
}
export function Game(props: any) {
    console.log(props)
    return (
        <div>
            <h3>{props.gameStep.question}</h3>
            <div>
                {(props.gameStep.options as Array<string>).map((op: string, index) => {
                    return (
                            <div onClick={() => props.chooseOption(index)}>{op}</div>
                    )
                })}
            </div>
        </div>
    );
}
