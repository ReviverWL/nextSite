import React from 'react';
import profile from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Statbar from './Statbar/Statbar';
import Ava from './Ava/Ava'

const Profile = (props) => {
    
    return <div className={profile.mainProfile}>
        <Statbar />
        <Ava />
        <div className='info'></div>
        <MyPostsContainer />
    </div>
};
export default Profile;