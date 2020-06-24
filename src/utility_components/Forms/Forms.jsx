import React from 'react'
import style from './Forms.module.css'

export const Textarea = ({input, meta, ...props}) => {
    const isError = meta.touched && meta.error
    return (
        <div className={isError ? style.error : ''}>
            <div className={style.message}>
            <textarea {...input}{...props} 
            onKeyPress={event => {
                if (event.key === "Enter") {
                    props.addPost()
                    event.preventDefault()
                }
            }} />
            </div>
            <div>
            {isError && <span className={style.error}>{meta.error}</span>}
            </div>
        </div>
    )
}
export const Input = ({input, meta, ...props}) => {
    const isError = meta.touched && meta.error
    return (
        <div className={isError ? style.error : ''}>
            <div className={style.message}>
            <input {...input}{...props} />
            </div>
            <div>
            {isError && <span className={style.error}>{meta.error}</span>}
            </div>
        </div>
    )
}