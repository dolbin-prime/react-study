import React, { useState, useEffect } from 'react';

export default function FunctionalCounter() {
    const [number, setNumber] = useState(0);

    // Why should I avoid this?
    //document.title = `You clicked ${number} times`;

    useEffect(() => {
        document.title = `You clicked ${number} times`;
      }, [number]);

    return (
        <div>
            <h2>The current state of functional counter is: {number}.</h2>
            <button onClick={() => setNumber(number + 1)}>+1</button>
            <button onClick={() => setNumber(number - 1)}>-1</button>
        </div>
    );
}