import React, { useEffect, useState } from 'react'

const HookCounter = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const incrementFive = () => {
        for(let i=0; i<5; i++){
            setCount(prevState => prevState + 1)
        }
    }

    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `Hook Count - ${count}`
    }, [count])

    return (
        <>
            <h1>Hook Count - {count}</h1>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={incrementFive}>Increment 5</button>
        </>
    )
}

export default HookCounter