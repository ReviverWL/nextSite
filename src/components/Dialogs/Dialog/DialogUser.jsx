import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Users.module.css'

const DialogUser = (props) => {
    let stat = props.dialogsPage.map((dialog) => {
        if (dialog.id === '01' || dialog.id === '0139') {
            return <div key={dialog.id} className={style.vocaloid}><NavLink to={"/dialogs/" + dialog.id}>{dialog.name}</NavLink></div>;
        }
        else {
            return <div key={dialog.id} className={style.dialog}><NavLink to={"/dialogs/" + dialog.id}>{dialog.name}</NavLink></div>;
        }
    }
    )
    
        return (
        <div>
            {stat}
        </div>
    )

};

export default DialogUser;