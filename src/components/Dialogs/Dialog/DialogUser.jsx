import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogUser = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )

};

export default DialogUser;