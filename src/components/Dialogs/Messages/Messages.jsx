import React from 'react';

let batonchik = React.createRef();

let ourPoem = ()=> alert(batonchik.current.value);

const Messages = (props) => {
    return (
        <div>{props.message}
        <textarea ref={batonchik}></textarea>
        <button onClick={ ourPoem }>Батончик</button>
        </div>
        )
}

export default Messages;