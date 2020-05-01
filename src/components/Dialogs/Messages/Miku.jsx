import React from 'react';
import letters from './Miku.module.css'

const Miku = () => {
return(
        <div className={letters.messages}>
            <div className={letters.message}>Hey</div>
            <div className={letters.message}>Yo</div>
            <div className={letters.message}>Owww</div>        
        </div>
    )
};

export default Miku;