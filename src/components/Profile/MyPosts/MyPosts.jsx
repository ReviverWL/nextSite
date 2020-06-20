import React from 'react';
import mess from './MyPost.module.css'
import PostsForm from './PostsForm';
import { compose } from 'redux';
import { connect } from 'react-redux';

const Post = (props) => {
    const sendPost = (formData)=>{
        props.addPost(formData.postMessage)
    }
    return (
        <div className={mess.myPosts}>
            <div >
                {props.posts.map((postText) => {
                    return (
                        <div>
                            <div>{postText.text}</div>
                            <span>likes: {postText.likes}</span>
                        </div>)
                })}
            </div>
            <PostsForm onSubmit={sendPost} />
        </div>
    )
}

export default compose(
    connect(null, {})
)(Post);