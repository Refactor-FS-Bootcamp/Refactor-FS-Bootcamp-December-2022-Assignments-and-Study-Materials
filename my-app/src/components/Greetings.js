import React from 'react'

const Greetings = (props) => {
    console.log(props)
    return (
        <>
            <h1>Greetings from {props.name}</h1>
            <p>{props.children}</p>
        </>
    )
}

export default Greetings