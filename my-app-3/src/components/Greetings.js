import React from 'react'

const Greetings = (props) => {
    const { name, children } = props;
    
    return (
        <>
            <h1>Greetings from {name}</h1>
            <p>{children}</p>
        </>
    )
}

export default Greetings