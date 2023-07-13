import React from 'react';

type resultProps = {
    result: number
}
function Result(props: resultProps) {
    return (
        <div>
            result is {props.result}%
        </div>
    );
}

export default Result;