import React from 'react'
import StatusForm from './StatusForm'
import { useState } from 'react'

//нужна доп проверка на профиль текущего пользователя
const Status = ({setNewStatus, status})=>{
    const[editorMode, setEditorMode] = useState(false)
    const onSubmitStatus = (data)=>{
        setNewStatus(data.status)
        setEditorMode(false)
    }
    // if(editorMode){

    // }
    // else{

    // }
    // useEffect(()=>{
      
    // }, [])
   
    // componentDidUpdate(prevProps, prevState){
    //     if(prevProps.status !== this.props.status){
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }
        return(
            <div>
            {
            editorMode
                ?<StatusForm status={status} setEditorMode={setEditorMode} onSubmit={onSubmitStatus}/>
                :<span onDoubleClick={()=>{setEditorMode(true)}}>{status || 'Cтатус не установлен'}</span>
            }
            </div>
        )
}

export default Status