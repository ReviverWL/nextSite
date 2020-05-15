import React from 'react';
import menu from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return <nav className={menu.mainmenu}>
        <div className={menu.item}><NavLink to='/profile' activeClassName={menu.active}>Профиль</NavLink></div>
        <div className={menu.item}><NavLink to='/dialogs' activeClassName={menu.active}>Диалоги</NavLink></div>
        <div className={menu.item}><NavLink to='/news' activeClassName={menu.active}>Новости</NavLink></div>
        <div className={menu.item}><NavLink to='/ミク' activeClassName={menu.active}>Музыка</NavLink></div>
        <div className={menu.item}><NavLink to='/settings' activeClassName={menu.active}>Настройки</NavLink></div>
    </nav>
};

export default Sidebar;