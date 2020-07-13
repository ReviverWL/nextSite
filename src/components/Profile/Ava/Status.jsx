import React from 'react'
import StatusForm from './StatusForm'
import { useState } from 'react'

//нужна доп проверка на профиль текущего пользователя
const Status = ({setNewStatus, status, abilityToChangeProfile})=>{
    const[editorMode, setEditorMode] = useState(false)
    const onSubmitStatus = (data)=>{
        setNewStatus(data.status)
        setEditorMode(false)
    }
        return(
            <div>
            {
            editorMode
                ?<StatusForm setEditorMode={setEditorMode} onSubmit={onSubmitStatus}/>
                :<span onDoubleClick={()=>{ if(abilityToChangeProfile) setEditorMode(true) }}>
                    {status || 'Cтатус не установлен'}</span>
            }
            </div>
        )
}

export default Status