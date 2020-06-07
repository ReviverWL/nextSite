import React from 'react';
import colored from './Saya.module.css'

let batonchik = React.createRef();
let ourPoem = ()=> alert(batonchik.current.value);



const Messages = (props) => {

    let star = props.messages.map((mess) => {
        if (mess.id === 4 || mess.id === 1) {
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
            <div>
                <textarea ref={batonchik}></textarea>
                <button onClick={ourPoem}>Батончик</button>
            </div>
        </div>
    )
}

export default Messages;