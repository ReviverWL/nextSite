import React from 'react';
import mess from './MyPost.module.css'
let post = React.createRef();

const Post = (props) => {
    let textflow = ()=>{
        props.textflow(post.current.value)
    }
    let addPost = ()=>{
        props.addPost()
    }
    let allPosts = props.profilePage.posts.map ( (postText)=> {
        return(
            <div>
                <div>{postText.text}</div>
                <span>likes: {postText.likes}</span>
            </div>
            )
            }
    )
    return (
        <div className={mess.myPosts}>
            <div>{allPosts}</div>
            <div>
                <textarea onKeyPress ={event=> {
                if(event.key==="Enter") {
                    addPost()
                    event.preventDefault()}}}
                value={props.profilePage.textflowPost} onChange={textflow} ref={post}/>
            </div>
            <div>
                <button onClick={ addPost }>Впиши своё имя в историю</button>
            </div>
        </div>
    )
}

export default Post;