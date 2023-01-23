import { BUY_EGG } from "./eggTypes";

const initialEggState = {
    numOfEggs: 100
}

const eggReducer = (state=initialEggState, action) => {
    switch (action.type) {
        case BUY_EGG:
            return {
                ...state,
                numOfEggs: state.numOfEggs - 1
            }
        default: return state
    }
}

export default eggReducer