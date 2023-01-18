import React, { useEffect, useState } from 'react'
import PostItem from './PostItem'
import axios from 'axios'

const PostList = () => {
    const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const url = 'https://jsonplaceholder.typicode.com/posts'
    //         const res = await fetch(url)
    //         const posts = await res.json()
    //         setPosts(posts)
    //     }
    //     fetchData()
    // },[])
    
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        axios.get(url)
            .then(res => {
                console.log(res);
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    return posts.map(post => <PostItem key={post.id} post={post} />)
}

export default PostList