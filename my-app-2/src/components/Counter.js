import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        // this.incrementCount = this.incrementCount.bind(this)
    }

    incrementCount = () => {
        // this.state.count = this.state.count + 1
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    incrementFive = () => {
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
    }

    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                {/* <button onClick={this.incrementCount.bind(this)}>Increment</button> */}
                {/* <button onClick={() => this.incrementCount()}>Increment</button> */}
                <button onClick={this.incrementCount}>Increment</button>
                <button onClick={this.incrementFive}>Increment 5</button>
            </div>
        )
    }
}

export default Counter