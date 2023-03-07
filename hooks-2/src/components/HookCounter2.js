import React, { useState } from 'react'

const HookCounter2 = () => {
    const [count, setCount] = useState(0)

    const incrementFive = () => {
        for(let i=0; i<5; i++){
            setCount(prevState => prevState + 1)
        }
    }

    return (
        <div>
            <h1>Hook Count - {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default HookCounter2