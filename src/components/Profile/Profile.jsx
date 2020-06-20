import React from 'react';
import profile from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Statbar from './Statbar/Statbar';
import Ava from './Ava/Ava'
import ProfileInfo from './ProrileInfo/ProfileInfo';
import Preloader from '../../utility_components/Preloader';

const Profile = (props) => {
    debugger;
    return (
    <div className={profile.mainProfile}>
        <Statbar />
        {props.profilePage.profileInfo === null?<Preloader/>:<>
        <Ava setNewStatus={props.setNewStatus} status={props.profilePage.status} photo={props.profilePage.profileInfo.photos.large}/>
        <ProfileInfo info={props.profilePage.profileInfo}/> 
        <MyPosts posts={props.profilePage.posts}
         addPost={props.addPost} textflow={props.textflow} textflowPost={props.profilePage.textflowPost}/></>}
    </div>
    )
};
export default Profile;