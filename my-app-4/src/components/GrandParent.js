import React, { Component } from 'react'
import Parent from './Parent'

class GrandParent extends Component {
    render() {
        return (
            <Parent />
        )
    }
}

export default GrandParent