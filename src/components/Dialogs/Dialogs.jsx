import React from 'react';
import letters from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Messages/Message';

const Dialogs = (props) => {

    return (
            <div className={letters.dialogs}>
                <div>
                    
                    <Dialog />
                </div>
                <div>
                    <Message/>
                    {/* <Route path='/dialogs/0139' component={<Message message='Sumimasen'/>} /> */}
                    {/* <Route path='/dialogs/0139' component={<Message message='Hello'/>} /> */}
                </div>
            </div>
    )
};

export default Dialogs;