import React, { Children, Component } from 'react'

class ClassMouse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            x: 0,
            y: 0
        }
    }

    logMousePosition = e => {
        console.log('ClassMouse logMousePosition')
        this.setState({ x: e.clientX, y: e.clientY })
    }

    componentDidMount() {
        console.log('componentDidMount ran')
        window.addEventListener('mousemove', this.logMousePosition)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount ran')
        window.removeEventListener('mousemove', this.logMousePosition)
    }

    render() {
        return (
            <div>
                <h1>X - {this.state.x}, Y- {this.state.y}</h1>
            </div>
        )
    }
}

export default ClassMouse