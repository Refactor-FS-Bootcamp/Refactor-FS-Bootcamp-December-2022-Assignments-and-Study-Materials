import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyChicken } from '../redux/chicken/chickenActions';

const HookChickenContainer = () => {
    const numOfChickens = useSelector(state => state.chicken.numOfChickens);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Num of Hook Chickens - {numOfChickens}</h2>
            <button onClick={() => dispatch(buyChicken())}>Buy Hook Chicken</button>
        </div>
    )
}

export default HookChickenContainer