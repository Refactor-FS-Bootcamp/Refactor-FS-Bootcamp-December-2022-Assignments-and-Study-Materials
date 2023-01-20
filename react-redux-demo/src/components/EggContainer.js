import React from 'react'
import { connect } from 'react-redux'
import { buyEgg } from '../redux/egg/eggActions'

const EggContainer = (props) => {
    return (
        <div>
            <h2>Number of Eggs - {props.eggNums}</h2>
            <button onClick={props.eggFunc}>Buy Egg</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        eggNums: state.numOfEggs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        eggFunc: () => dispatch(buyEgg())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EggContainer)