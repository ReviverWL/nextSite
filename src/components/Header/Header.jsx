import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    return (
        <header className={style.myHeader}>
            <div className={style.divider}>
                <img src='https://say-hi.me/wp-content/uploads/2018/07/mozilla-logos-1.png' alt="none" />
                <div className={style.currentUser}>
                    {props.authStatus ?
                        <>
                        <div>{props.login}<span className={style.quitButton} onClick={props.logout}>выход</span></div>
                        <div>{props.email}</div>
                        
                        </> :
                        <NavLink to='/authentification'>логин</NavLink>}
                </div>
            </div>
        </header>
    )
};

export default Header