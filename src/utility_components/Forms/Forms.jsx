import React from 'react'
import style from './Forms.module.css'

export const Textarea = ({input, meta, ...props}) => {
    const isError = meta.touched && meta.error
    return (
        <div className={isError ? style.error : ''}>
            <div className={style.message}>
            <textarea {...input}{...props} />
            </div>
            <div>
            {isError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}
export const Input = () => {
    return (
        <div className={style.forData + style.error}>
            <input />
            <span></span>
        </div>
    )
}