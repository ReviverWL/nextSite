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
                        <div>{props.login}</div>
                        <div>{props.email}</div>
                        </> :
                        <NavLink to='/authentification'>login</NavLink>}
                </div>
            </div>
        </header>
    )
};

export default Header