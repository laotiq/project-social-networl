import React from "react";
import s from "./Post.module.css"
import {NavLink} from "react-router-dom";


const Post = (props) => {
    let message = props.profilePage.posts.post
    return (
        <div>
            {message}
        </div>
    )
}

export default Post