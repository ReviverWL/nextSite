import React from 'react';
import mess from './MyPost.module.css'
import {addPostActionCreator, textflowActionCreator} from './../../../../redux/profile-reduser'
let post = React.createRef();

const Post = (props) => {
    let textflow = ()=>{
        let text = post.current.value
        props.dispatch(textflowActionCreator(text))
    }
    let addPost = ()=>{
        props.dispatch(addPostActionCreator())
    }
    let state = props.store.getState().profilePage
    let allPosts = state.posts.map ( (postText)=> {
        return(
            <div>
                <div>{postText.text}</div>
                <span>likes: {postText.likes}</span>
            </div>
            )
            }
    )
    return (
        <div className={mess.message}>
            <div>{allPosts}</div>
            <div>
                <textarea onKeyPress ={event=> {
                if(event.key==="Enter") {
                    addPost()
                    event.preventDefault()}}}
                value={state.textflowPost} onChange={textflow} ref={post}/>
            </div>
            <div>
                <button onClick={ addPost }>Впиши своё имя в историю</button>
            </div>
        </div>
    )
}

export default Post;