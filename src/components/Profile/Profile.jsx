import React from 'react';
import profile from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Statbar from './Statbar/Statbar';
import Ava from './Ava/Ava'

const Profile = (props) => {
    
    return <div className={profile.mainProfile}>
        <Statbar />
        <Ava />
        <div className='info'></div>
        <MyPosts store= {props.store} dispatch={props.dispatch}/>
    </div>
};
export default Profile;