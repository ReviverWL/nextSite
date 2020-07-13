import React from 'react';
import profile from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Statbar from './Statbar/Statbar';
import Ava from './Ava/Ava'
import ProfileInfo from './ProrileInfo/ProfileInfo';
import Preloader from '../../utility_components/Preloader';

const Profile = ({profilePage, setNewStatus, addPost, abilityToChangeProfile, updateUserPhoto}) => {
    return (
    <div className={profile.mainProfile}>
        <Statbar />
        {profilePage.profileInfo === null
        ?<Preloader/>
        :<>
        <Ava setNewStatus={setNewStatus} status={profilePage.status} updateUserPhoto={updateUserPhoto}
        photo={profilePage.profileInfo.photos.large} abilityToChangeProfile={abilityToChangeProfile}/>
        <ProfileInfo info={profilePage.profileInfo} abilityToChangeProfile={abilityToChangeProfile}/> 
        <MyPosts posts={profilePage.posts} addPost={addPost} />
        </>}
    </div>
    )
};
export default Profile;