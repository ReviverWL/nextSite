import React from 'react';
import style from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    
    return <>
        <div className={props.info.lookingForAJob ? style.seeker : style.pinkglass}>
            <div >О себе: {props.info.aboutMe !== null?props.info.aboutMe : ''}</div>
            <div >Потребность в работе: {props.info.lookingForAJob? 'Да':'Нет'}</div>
            {props.info.lookingForAJob ? <div>Описание желаемой работы: {props.info.lookingForAJobDescription}</div> : null}
        </div>
    </>
}

export default ProfileInfo