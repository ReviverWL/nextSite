import React from 'react';
import myPosts from './MyPosts.module.css';
import Post from './Post/MyPost';

const MyPosts = (props) => {

    return (
        <div className={myPosts.myPosts}>
            <Post store={props.store}  dispatch={props.dispatch} />
        </div>
    )

}

export default MyPosts;
