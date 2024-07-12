import React from "react";
import s from "./Content.Module.css"
import {NavLink} from "react-router-dom";
import Post from "./Post/Post";
import {updateNewPost} from "../../../Redux/Redux";


const Content = (props) => {
    let newmessageElement = props.profilePage.posts.map (p => <Post message={p.post} like={'0'}/>);
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addNewPost()
        props.updateNewPost('')
    }
    let PostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPost(text)
    }

    return (
        <div className={s.content}>
            <textarea onChange={PostChange} ref={newPostElement}
                        value={props.state.newPostText}></textarea>
            <button onClick={addPost}>Post</button>
        </div>
    )
}

export default Content