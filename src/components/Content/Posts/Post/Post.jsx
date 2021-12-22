import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.item}>{props.name}</div>
        </div>

    )
}

export default Post;