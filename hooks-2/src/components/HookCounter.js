import React, { useEffect, useState } from 'react'

const HookCounter = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `Count - ${count}`
    }, [count])

    return (
        <div>
            <h1>Hook Count - {count}</h1>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default HookCounter