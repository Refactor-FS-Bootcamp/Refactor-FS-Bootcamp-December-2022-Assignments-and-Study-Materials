import React, { Component } from 'react'

class DemoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            comment: '',
            lang: 'vue'
        }
    }

    handleUserChange = e => {
        this.setState({
            user: e.target.value
        })
    }

    handleCommentChange = e => {
        this.setState({
            comment: e.target.value
        })
    }

    handleLangChange = e => {
        this.setState({
            lang: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="user">Username: </label>
                    <input type="text" id="user" value={this.state.user} onChange={this.handleUserChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comments: </label>
                    <textarea id="comment" value={this.state.comment} onChange={this.handleCommentChange}></textarea>
                </div>
                <br />
                <div>
                    <label htmlFor="lang">Language: </label>
                    <select id="lang" value={this.state.lang} onChange={this.handleLangChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                        <option value="reactnative">React Native</option>
                    </select>
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default DemoForm