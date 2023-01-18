import React from 'react'

const containerStyled = {
    backgroundColor: 'yellow',
    padding: '10px',
    marginBottom: '5px'
}

const PostItem = ({ post }) => {
    return (
        <div style={containerStyled}>
            <h1 style={{ backgroundColor: 'green', padding: '8px', color: 'white' }}>ID: {post.id}</h1>
            <h3>Title: {post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}

export default PostItem