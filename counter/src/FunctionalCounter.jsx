import React, { useState } from 'react';

export default function FunctionalCounter() {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <h2>The current state of functional counter is: {number}.</h2>
            <button onClick={() => setNumber(number + 1)}>+1</button>
            <button onClick={() => setNumber(number - 1)}>-1</button>
        </div>
    );
}