import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const { name, children } = this.props;

        return (
            <>
                <h1>Welcome to {name}</h1>
                <p>{children}</p>
            </>
        )
    }
}

export default Welcome