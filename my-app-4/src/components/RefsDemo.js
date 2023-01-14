import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.userRef = React.createRef()
        this.commentRef = React.createRef()
    }

    componentDidMount() {
        this.userRef.current.focus()
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.userRef.current.value)
        console.log(this.commentRef.current.value)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="user">Username: </label>
                    <input type="text" id="user" ref={this.userRef} />
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comments: </label>
                    <textarea id="comment" ref={this.commentRef}></textarea>
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default RefsDemo