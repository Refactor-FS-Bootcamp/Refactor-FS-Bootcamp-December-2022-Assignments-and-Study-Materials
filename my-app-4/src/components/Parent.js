import React, { Component } from 'react'
import Child from './Child'
import UserContext from './userContext'

class Parent extends Component {
    static contextType = UserContext

    render() {
        return (
            <>
                <h1>Parent welcomes {this.context}</h1>
                <Child />
            </>
        )
    }
}

export default Parent