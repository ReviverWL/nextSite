import React from 'react';
import mess from './MyPost.module.css'

const Post = (props) => {
    return (
        <div className={mess.message}>
            {props.mess}
            <div>
                <span>{props.like} likes</span>
            </div>        
        </div>
    )
};

export default Post;