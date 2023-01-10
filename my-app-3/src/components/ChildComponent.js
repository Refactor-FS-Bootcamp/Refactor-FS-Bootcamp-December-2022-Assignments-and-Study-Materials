import React from 'react'

const ChildComponent = (props) => {
    return (
        <button onClick={() => props.greetHandler('Sodhi Singh')}>Greet Parent</button>
    )
}

export default ChildComponent