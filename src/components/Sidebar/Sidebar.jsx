import React from 'react';
import menu from './Sidebar.module.css';

const Sidebar = () => {
    return <nav className={menu.mainmenu}>
        <div className={menu.item}><a href='#'>Profile</a></div>
        <div className={menu.item}><a href='#'>Messages</a></div>
        <div className={menu.item}><a href='#'>News</a></div>
        <div className={`${menu.item} ${menu.nice}`}><a href='#'>Music</a></div>
        <div className={menu.item}><a href='#'>Settings</a></div>
    </nav>
};

export default Sidebar;