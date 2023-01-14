import React from 'react'
import PostItem from './PostItem'

const ListPost = () => {
    const posts = [
        {
            "id": 1,
            "title": "sunt aut facere repellat ",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nr"
        },
        {
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihilneque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non"
        },
        {
            "id": 3,
            "title": "exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem "
        }
    ]

    return posts.map(post => <PostItem key={post.id} post={post} />)
}

export default ListPost