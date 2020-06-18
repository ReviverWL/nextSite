import React from 'react';
import out_of_photo from '../../../assets/out_of_photo.jpg'
import ava from './Ava.module.css'
import Status from './Status';

const Ava = (props) => {
    
    return (
        <div className={ava.ava}>
            <img src={props.photo === null ?  out_of_photo: props.photo} alt='nani' />
            <Status setNewStatus={props.setNewStatus} status={props.status} />
        </div>

        )
};

export default Ava;