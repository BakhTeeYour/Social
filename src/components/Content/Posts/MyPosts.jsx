import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let postData = [
        {id: 1, message: "Hello, this is my first project!", likes: 140},
        {id: 2, message: "We're gonna create a new social network!", likes: 210}
    ]
    let postElement = postData.map(p => <Post message={p.message} likes={p.likes}/>)
    return (
        <div className={s.myPosts}>My posts
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div>
                    {postElement}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;