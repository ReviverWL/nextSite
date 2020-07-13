import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { compose } from 'redux'

const SendImageForm = ({onChangePhoto, onMouseOverAva, onMouseOutAva, buttonVisibility, onSendPhoto}) => {
    return (
        <>
            <button onMouseOver={onMouseOverAva} onMouseOut={onMouseOutAva} className={buttonVisibility}
            onClick={onSendPhoto}>Изменить фото</button>
            {/* <Field name='imagesrc' component='input' type='file' 
            onMouseOver={onMouseOverAva} onMouseOut={onMouseOutAva} /> */}
            <input onMouseOver={onMouseOverAva} onMouseOut={onMouseOutAva} onChange={onChangePhoto} type="file" />
        </>
    )
}

export default SendImageForm