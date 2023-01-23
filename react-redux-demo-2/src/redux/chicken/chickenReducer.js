import { BUY_CHICKEN } from "./chickenTypes";

const initialChickenState = {
    numOfChickens: 10
}

const chickenReducer = (state=initialChickenState, action) => {
    switch (action.type) {
        case BUY_CHICKEN:
            return {
                ...state,
                numOfChickens: state.numOfChickens - 1
            }
        default: return state
    }
}

export default chickenReducer