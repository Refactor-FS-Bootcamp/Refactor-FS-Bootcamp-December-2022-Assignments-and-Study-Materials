import React, { Component } from 'react'
import ChildLifecycle from './ChildLifecycle'

class ParentLifecycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'ParentLifecycle'
        }
        console.log('ParentLifecycle constructor')
    }

    componentDidMount(){
        console.log('ParentLifecycle componentDidMount')
    }

    componentDidUpdate() {
        console.log('ParentLifecycle componentDidUpdate')
    }

    render() {
        console.log('ParentLifecycle render')
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={() => this.setState({ name: 'TheWebDev' })}>Change State</button>
                <ChildLifecycle />
            </div>
        )
    }
}

export default ParentLifecycle