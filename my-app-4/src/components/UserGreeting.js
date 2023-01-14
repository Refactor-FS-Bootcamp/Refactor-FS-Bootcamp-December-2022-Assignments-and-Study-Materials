import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        // return this.state.isLoggedIn ? <h1>Welcome Nabendu</h1> : <h1>Welcome Guest</h1>

        return this.state.isLoggedIn && <h1>Welcome Nabendu</h1>

        // let message;
        // if(this.state.isLoggedIn)
        //     message = <h1>Welcome Nabendu</h1>
        // else 
        //     message = <h1>Welcome Guest</h1>
        
        // return <>{message}</>
    }
}

export default UserGreeting