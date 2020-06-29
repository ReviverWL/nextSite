import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = (props) => {
    const[additionalDataVisibility, setAdditionalDataVisibility] = useState(style.hideAdditionalUserData)
    return (
        <header className={style.myHeader}>
            <div className={style.divider}>
                <img src='https://say-hi.me/wp-content/uploads/2018/07/mozilla-logos-1.png' alt="none" />
                <div className={style.currentUser}>
                    {props.isAuthUser
                    ?<div className={style.authUserInfo}>
                        <div onMouseOver={()=>{setAdditionalDataVisibility(style.showAdditionalUserData)}}
                             onMouseOut={()=>{setAdditionalDataVisibility(style.hideAdditionalUserData)}}>
                            {props.authLogin}
                        </div>
                        <span className={additionalDataVisibility}
                        onMouseOver={()=>{setAdditionalDataVisibility(style.showAdditionalUserData)}}
                        onMouseOut={()=>{setAdditionalDataVisibility(style.hideAdditionalUserData)}}
                        >{props.email}</span>
                        <div><span className={style.quitButton} onClick={props.logout}>выход</span></div>
                    </div>
                    :<NavLink to='/authentification'>логин</NavLink>}
                </div>
            </div>
        </header>
    )
};

export default Header