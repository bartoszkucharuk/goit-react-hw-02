import React, {useState } from 'react';

function Options() {

    const [count, setCount] = useState(0);

    const good = () => {
        setCount(count + 1);
    }
    const neutral = () => {
        setCount(count +1);
    }

    const bad = () => { 
        setCount(count + 1);
    }
    const reset = () => {
        setCount(0);
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={good}>good</button>
            <button onClick={neutral}>neutral</button>
            <button onClick={bad}>bad</button>
            <button onClick={reset}>reset state</button>
        </div>
    )
}
 
export default Options;