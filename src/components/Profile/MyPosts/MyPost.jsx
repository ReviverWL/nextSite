import React from 'react';
import mess from './MyPost.module.css'
let post = React.createRef();

const Post = (props) => {
    let allPosts = props.posts.map ( (postText)=> {
        return(
            <div>
                <div>{postText.text}</div>
                <span>likes: {postText.likes}</span>
            </div>)})
    return (
        <div className={mess.myPosts}>
            <div >{allPosts}</div>
            <div>
                <textarea onKeyPress ={event=> {
                if(event.key==="Enter") {
                    props.addPost()
                    event.preventDefault()}}}
                value={props.textflowPost} 
                onChange={()=>{props.textflow(post.current.value)}} ref={post}/>
            </div>
            <div>
                <button onClick={ props.addPost }>Впиши своё имя в историю</button>
            </div>
        </div>
    )
}

export default Post;