import React, { useState } from 'react';
import out_of_photo from '../../../assets/out_of_photo.jpg'
import style from './Ava.module.css'
import Status from './Status';
import { useEffect } from 'react';
import SendImageForm from './SendImageForm';

const Ava = ({setNewStatus, status, photo, abilityToChangeProfile, updateUserPhoto}) => {
    const[buttonVisibility, setButtonVisibility] = useState(style.hideButton)
    const[substrateVisibility, setSubstrateVisibility] = useState(style.hideSubstrate)
    const onMouseOverAva = ()=>{
        setButtonVisibility(style.showButton)
        setSubstrateVisibility(style.showSubstrate)
    }
    const onMouseOutAva = ()=>{
        setButtonVisibility(style.hideButton)
        setSubstrateVisibility(style.hideSubstrate)
    }

    const[photosrc, setPhoto] = useState('')

    useEffect(()=>{
        setPhoto(photo)
    }, [photo])

    const onSendPhoto = () => {
        photo !== photosrc ? updateUserPhoto(photosrc) : alert('Вы загружаете то же самое изображение')
    }

    const onChangePhoto = (e) => {
        if (e.target.files[0]) {
            setPhoto(e.target.files[0])
        }
    }
    // function showButton(onMouseOver, onMouseOut){
    //     onMouseOver=()=>{setButtonVisibility(style.showButton)};
    //     onMouseOut=()=>{setButtonVisibility(style.hideButton)}
    // }
    // if(buttonVisibility === style.hideButton){style.showSubstrate style.hideSubstrate}
    return (
        <div className={style.ava}>
            <img src={!photo ? out_of_photo : photo}
            alt='Жаль, что с пользователем нельзя общаться через тег alt'
            onMouseOver={onMouseOverAva}
            onMouseOut={onMouseOutAva}
            />
            {abilityToChangeProfile
            &&<div className={substrateVisibility}> 
            <SendImageForm onSendPhoto={onSendPhoto} onChangePhoto={onChangePhoto} onMouseOverAva={onMouseOverAva}
             onMouseOutAva={onMouseOutAva} buttonVisibility={buttonVisibility}/> </div>}
            <Status setNewStatus={setNewStatus} status={status} abilityToChangeProfile={abilityToChangeProfile}/>
        </div>
        )
};
export default Ava;