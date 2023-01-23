import React, { useContext } from 'react'
import { CountContext } from '../App';
import Parent1 from './Parent1'

const GrandParent1 = () => {
    const countContext = useContext(CountContext);

    return (
        <>
            <h1>GrandParent1 Count - {countContext.count}</h1>
            <Parent1 />
        </>
    )
}

export default GrandParent1