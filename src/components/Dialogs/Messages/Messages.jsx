import React from 'react';
import colored from './Saya.module.css'
import MessagesForm from './MessagesForm';

const Messages = (props) => {
    const sendMessage = (data)=>{
        props.addMessage(data.message)
    }
    let star = props.messages.map((mess) => {
        if (mess.id === 1 || mess.id === 4) {
        return <div className={colored.vocaloid}>{mess.message}</div>;
        }
        else {
            return <div className={colored.message}>{mess.message}</div>;
        }
    }
    )
    return (
        <div>
            <div>{star}</div>
            <MessagesForm onSubmit={sendMessage}/>
        </div>
    )
}

export default Messages;