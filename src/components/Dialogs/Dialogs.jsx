import React from 'react';
import letters from './Dialogs.module.css'
import Users from './Dialog/Users'
import Messages from './Messages/Messages';

const Dialogs = (props) => {
    return (
            <div className={letters.dialogs}>
                <div>                    
                    <Users users ={props.dialogs.users}/>
                </div>
                <div>
                    <Messages/>
                </div>
            </div>
    )
};

export default Dialogs;