import React, { Component } from 'react'
import PostItem from './PostItem'

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    async componentDidMount(){
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const res = await fetch(url)
        const posts = await res.json()
        this.setState({ posts } )
    }
    
    render() {
        const { posts } = this.state
        return posts.map(post => <PostItem key={post.id} post={post} />)
    }
}

export default PostList