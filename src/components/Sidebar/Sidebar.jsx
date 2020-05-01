import React from 'react';
import menu from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return <nav className={menu.mainmenu}>
        <div className={menu.item}><NavLink to='/profile' activeClassName={menu.active}>Profile</NavLink></div>
        <div className={menu.item}><NavLink to='/messages' activeClassName={menu.active}>Messages</NavLink></div>
        <div className={menu.item}><NavLink to='/news' activeClassName={menu.active}>News</NavLink></div>
        <div className={menu.item}><NavLink to='/ミク' activeClassName={menu.active}>Music</NavLink></div>
        <div className={menu.item}><NavLink to='/settings' activeClassName={menu.active}>Settings</NavLink></div>
    </nav>
};

export default Sidebar;