import React from 'react';
import letter from './Dialog.module.css'
import DialogUser from './DialogUser';

const Dialog = (props) => {
return(  
        <div className={letter.dialog}>
            <DialogUser id='01' name='Miku'/> 
            <DialogUser id='0139' name='Saya'/> 
            <DialogUser id='010' name='Elli'/> 
            <DialogUser id='02' name='Rin'/> 
            <DialogUser id='10' name='AnonCos'/> 
        </div>  
    )
};

export default Dialog;