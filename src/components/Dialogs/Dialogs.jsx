import React from 'react';
import letters from './Dialogs.module.css'
import DialogUserContainer from './Dialog/DialogUserContainer'
import MessagesContainer from './Messages/MessagesContainer';

const Dialogs = (props) => {
    return (
            <div className={letters.dialogs}>
                    <DialogUserContainer />
                    <MessagesContainer/>
            </div>
    )
};

export default Dialogs;