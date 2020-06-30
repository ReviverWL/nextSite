import React from 'react';
import out_of_photo from '../../../assets/out_of_photo.jpg'
import ava from './Ava.module.css'
import Status from './Status';

const Ava = ({setNewStatus, status, photo}) => {
    
    return (
        <div className={ava.ava}>
            <img src={photo === null ?  out_of_photo: photo} alt='nani' />
            <Status setNewStatus={setNewStatus} status={status}/>
        </div>

        )
};

export default Ava;