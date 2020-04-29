import React from 'react';
import myPosts from './MyPosts.module.css';
import Post from './Post/MyPost';

const MyPosts = () => {
    return (
        <div className={myPosts.myPosts}>
            <Post mess="azaazzaza" like='25'/>
            <Post mess='初音ミク' like='39'/>
        </div>
    )

}

export default MyPosts;
